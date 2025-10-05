import os
import json
import asyncio
from typing import List, Optional
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="Opportune AI Scholarships API",
    description="AI-powered scholarship matching using Gemini 2.0 Flash",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:8080",
        "http://localhost:8081",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:8080",
        "http://127.0.0.1:8081"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Gemini
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("Missing GEMINI_API_KEY environment variable")

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-2.0-flash")

# --- Pydantic Models ---

class ScholarshipMatch(BaseModel):
    title: str
    amount: str
    link: str
    deadline: str
    eligibility: str
    description: Optional[str] = None

class StudentProfile(BaseModel):
    name: str
    major: str
    gpa: str
    year: str
    interests: str
    background: str

class ScholarshipResponse(BaseModel):
    scholarships: List[ScholarshipMatch]
    total_found: int
    search_criteria: StudentProfile


# --- API Endpoints ---

@app.get("/")
async def root():
    return {"message": "Opportune AI Scholarships API is running!", "status": "healthy"}

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "gemini_configured": bool(GEMINI_API_KEY),
        "api_version": "1.0.0"
    }


# --- Core Function: Gemini Query ---
async def query_gemini_for_scholarships(student_profile: StudentProfile) -> List[ScholarshipMatch]:
    """Query Gemini API for verified scholarship recommendations."""

    prompt = f"""
    You are an expert scholarship advisor and education data researcher.
    Using up-to-date information from legitimate U.S. sources (universities, foundations, companies, or government programs),
    identify 5–8 real scholarships that are **currently open** and match this student's profile.

    Student Profile:
    - Name: {student_profile.name}
    - Major: {student_profile.major}
    - GPA: {student_profile.gpa}
    - Year: {student_profile.year}
    - Interests: {student_profile.interests}
    - Background: {student_profile.background}

    Rules:
    1. Only include scholarships that are currently accepting applications.
    2. Focus on relevance to the student's background, major, and interests.
    3. Include a mix of merit-based, need-based, and demographic/field-specific awards.
    4. Verify that each scholarship is legitimate and includes a working URL.
    5. Use real deadlines or note 'Rolling' if unspecified.
    6. Return only a JSON array—no markdown, no preamble.

    JSON Format Example:
    [
        {{
            "title": "Coca-Cola Scholars Program",
            "amount": "$20,000",
            "link": "https://www.coca-colascholarsfoundation.org/",
            "deadline": "October 31, 2025",
            "eligibility": "High school seniors with strong academics and leadership achievements.",
            "description": "Prestigious national scholarship supporting leadership and academic excellence."
        }}
    ]
    """

    try:
        response = await asyncio.to_thread(
            model.generate_content,
            prompt,
            generation_config=genai.types.GenerationConfig(
                temperature=0.3,
                top_p=0.8,
                top_k=40,
                max_output_tokens=2048,
            )
        )

        # Extract JSON from response
        response_text = response.text.strip()
        
        # Clean up the response to extract JSON
        if response_text.startswith('```json'):
            response_text = response_text[7:]
        if response_text.endswith('```'):
            response_text = response_text[:-3]
        
        # Parse JSON response
        scholarships_data = json.loads(response_text)
        
        # Convert to ScholarshipMatch objects
        scholarships = []
        for item in scholarships_data:
            scholarship = ScholarshipMatch(
                title=item.get("title", ""),
                amount=item.get("amount", ""),
                link=item.get("link", ""),
                deadline=item.get("deadline", ""),
                eligibility=item.get("eligibility", ""),
                description=item.get("description", "")
            )
            scholarships.append(scholarship)
        
        return scholarships

    except json.JSONDecodeError as e:
        print(f"JSON parsing error: {e}")
        print(f"Response text: {response_text}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to parse scholarship data from AI response"
        )
    except Exception as e:
        print(f"Gemini error: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching scholarship recommendations: {str(e)}"
        )


# --- Main Endpoint ---
@app.post("/api/match", response_model=ScholarshipResponse)
async def match_scholarships(student_profile: StudentProfile):
    """Match scholarships based on student profile using Gemini AI."""
    if not student_profile.name.strip() or not student_profile.major.strip():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Name and major are required."
        )

    scholarships = await query_gemini_for_scholarships(student_profile)
    if not scholarships:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No scholarships found matching this profile."
        )

    return ScholarshipResponse(
        scholarships=scholarships,
        total_found=len(scholarships),
        search_criteria=student_profile
    )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)