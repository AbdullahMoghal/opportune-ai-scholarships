# OpportuneAI Scholarships

An AI-powered scholarship matching platform that helps students find personalized scholarship opportunities using Google Gemini AI.

## 🚀 Features

- **AI-Powered Matching**: Uses Google Gemini 2.0 Flash to match students with relevant scholarships
- **Comprehensive Profile System**: Collects detailed student information including demographics, academic background, and interests
- **Smart Calendar Integration**: Add scholarship deadlines directly to your calendar with one click
- **Multi-language Support**: Available in English and Spanish
- **Omnia AI Assistant**: Interactive AI guide to help navigate the platform
- **Responsive Design**: Modern, luxury UI with dark theme and high contrast

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Shadcn/ui** for UI components
- **React Router** for navigation
- **React Query** for data fetching
- **React i18next** for internationalization

### Backend
- **FastAPI** (Python)
- **Google Gemini AI** for scholarship matching
- **Pydantic** for data validation
- **Uvicorn** as ASGI server

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- Python 3.9+
- Google Gemini API key

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/AbdullahMoghal/opportune-ai-scholarships.git
cd opportune-ai-scholarships
```

### 2. Backend Setup
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp env.example .env
# Add your Google Gemini API key to .env

# Start backend server
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### 3. Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### Getting a Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env` file

## 📱 Usage

1. **Get Started**: Fill out your student profile with academic and demographic information
2. **AI Matching**: Our AI analyzes your profile and finds relevant scholarships
3. **Review Results**: Browse matched scholarships with detailed information
4. **Calendar Integration**: Add deadlines to your calendar with one click
5. **Get Help**: Use Omnia AI assistant for guidance and tips

## 🎯 Key Features Explained

### AI-Powered Scholarship Matching
- Uses Google Gemini 2.0 Flash for intelligent matching
- Considers academic background, demographics, interests, and financial need
- Provides real-time, personalized recommendations

### Smart Calendar Integration
- One-click calendar integration for scholarship deadlines
- Supports Google Calendar, Outlook, and other calendar apps
- Downloads .ics files for offline calendar management

### Omnia AI Assistant
- Interactive chat interface for platform guidance
- Provides tips on scholarship applications and essay writing
- Helps users navigate the platform effectively

### Comprehensive Profile System
- Academic information (GPA, major, year)
- Demographic data (race/ethnicity, gender, income)
- Background information (military service, disability status)
- Interests and extracurricular activities

## 🌐 Internationalization

The platform supports multiple languages:
- English (default)
- Spanish (Español)

Language can be switched using the toggle in the header.

## 📊 API Endpoints

### Core Endpoints
- `GET /` - Health check
- `GET /health` - Detailed health status
- `POST /api/match` - Match scholarships based on student profile

### API Documentation
Visit http://localhost:8000/docs for interactive API documentation.

## 🏗️ Project Structure

```
opportune-ai-scholarships/
├── src/                    # Frontend React application
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── locales/          # Translation files
│   ├── lib/              # Utility functions
│   └── hooks/            # Custom React hooks
├── main.py               # FastAPI backend
├── requirements.txt      # Python dependencies
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powerful scholarship matching capabilities
- Shadcn/ui for beautiful UI components
- The React and FastAPI communities for excellent documentation

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the development team
- Check the API documentation at `/docs`

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Advanced filtering options
- [ ] Scholarship application tracking
- [ ] Email notifications for deadlines
- [ ] Mobile app development
- [ ] Integration with more calendar providers
- [ ] Advanced AI features with Omnia assistant

---

**Made with ❤️ by the OpportuneAI team**