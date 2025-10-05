# Opportune AI Scholarships Backend

A FastAPI backend that uses Google's Gemini 1.5 Flash API to provide intelligent scholarship matching based on student profiles.

## 🚀 Quick Start

### Prerequisites
- Python 3.8 or higher
- Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Setup

1. **Clone and navigate to the project:**
   ```bash
   cd opportune-ai-scholarships-main
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env
   # Edit .env and add your Gemini API key
   ```

3. **Install dependencies:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

4. **Start the backend:**
   ```bash
   # Option 1: Use the startup script
   ./start_backend.sh
   
   # Option 2: Manual start
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

## 📡 API Endpoints

### Health Check
- **GET** `/` - Basic health check
- **GET** `/health` - Detailed health status

### Scholarship Matching
- **POST** `/api/match` - Match scholarships based on student profile

#### Request Body Example:
```json
{
  "name": "John Doe",
  "major": "Computer Science",
  "gpa": "3.5",
  "year": "Junior",
  "interests": "Robotics, volunteering",
  "background": "Community service, leadership roles"
}
```

#### Response Example:
```json
{
  "scholarships": [
    {
      "title": "Google Lime Scholarship",
      "amount": "$10,000",
      "link": "https://www.google.com/edu/scholarships/",
      "deadline": "December 1, 2024",
      "eligibility": "Computer Science major, 3.0+ GPA, underrepresented in tech",
      "description": "Supports students pursuing degrees in computer science"
    }
  ],
  "total_found": 5,
  "search_criteria": { ... }
}
```

## 🔧 Configuration

### Environment Variables
- `GEMINI_API_KEY` - Your Google Gemini API key (required)
- `HOST` - Server host (default: 0.0.0.0)
- `PORT` - Server port (default: 8000)

### CORS Configuration
The backend is configured to allow requests from:
- `http://localhost:3000`
- `http://localhost:5173` (Vite default)
- `http://localhost:5500` (Live Server default)

## 🧠 How It Works

1. **Student Profile Input**: The API receives student information including major, GPA, year, interests, and background.

2. **AI Processing**: The profile is sent to Gemini 1.5 Flash with a carefully crafted prompt to find relevant scholarships.

3. **Scholarship Matching**: Gemini analyzes the profile and returns real, current scholarships that match the student's criteria.

4. **Structured Response**: The AI response is parsed and returned as structured JSON with scholarship details.

## 🛠️ Development

### API Documentation
Once running, visit:
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

### Testing
```bash
# Test the health endpoint
curl http://localhost:8000/health

# Test scholarship matching
curl -X POST http://localhost:8000/api/match \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Student",
    "major": "Computer Science",
    "gpa": "3.5",
    "year": "Junior",
    "interests": "AI, Machine Learning",
    "background": "Research experience"
  }'
```

## 🔒 Security Notes

- Keep your Gemini API key secure and never commit it to version control
- The API includes input validation and error handling
- CORS is configured for development - adjust for production deployment

## 📝 License

This project is part of the Opportune AI Scholarships application.
