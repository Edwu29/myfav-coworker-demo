# MCP Test Application

A full-stack web application built to test and demonstrate MCP (Model Context Protocol) features with a React frontend and Python Flask backend.

## 🚀 Features

- **React Frontend**: Modern UI with TypeScript, responsive design, and beautiful components
- **Flask Backend**: RESTful API with CORS support for seamless frontend integration
- **User Management**: Create, view, and delete users with role-based access
- **Statistics Dashboard**: Real-time application metrics and analytics
- **Repository Showcase**: Display trending GitHub repositories
- **MCP Integration**: Demonstrates MCP server capabilities for enhanced AI interactions

## 📁 Project Structure

```
mcp-test-app/
├── backend/
│   ├── main.py              # Flask application with API endpoints
│   ├── requirements.txt     # Python dependencies
│   └── venv/               # Virtual environment
├── frontend/
│   ├── src/
│   │   ├── components/     # React UI components
│   │   │   ├── UserList.tsx
│   │   │   ├── UserForm.tsx
│   │   │   ├── StatsCard.tsx
│   │   │   └── RepoList.tsx
│   │   ├── services/       # API service layer
│   │   │   └── apiService.ts
│   │   ├── types.ts        # TypeScript type definitions
│   │   ├── App.tsx         # Main React application
│   │   └── App.css         # Styling and responsive design
│   ├── package.json        # Node.js dependencies
│   └── public/            # Static assets
└── README.md              # This file
```

## 🛠 Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the Flask server:
   ```bash
   python main.py
   ```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## 🔌 API Endpoints

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/users/{id}` - Get user by ID
- `DELETE /api/users/{id}` - Delete user by ID

### Statistics
- `GET /api/stats` - Get application statistics

### GitHub Integration
- `GET /api/github/trending` - Get trending repositories (mock data)

### Health Check
- `GET /` - API health check and version info

## 🎨 UI Components

### UserForm
Interactive form for creating new users with validation and role selection.

### UserList
Grid display of users with delete functionality and role-based styling.

### StatsCard
Beautiful statistics dashboard with gradient cards showing key metrics.

### RepoList
Showcase of trending repositories with star counts and language tags.

## 🧪 MCP Features Demonstrated

This application showcases several MCP (Model Context Protocol) capabilities:

1. **GitHub MCP Server Integration**: 
   - Fetches starred repositories
   - Demonstrates real-time data integration

2. **Context7 MCP Server**: 
   - Provides up-to-date documentation
   - Enhances development workflow

3. **API Design**: 
   - RESTful endpoints for AI consumption
   - Structured data formats for MCP compatibility

## 🎯 Testing the Application

1. **User Management**: 
   - Add new users through the form
   - View users in the grid layout
   - Delete users with the × button

2. **Statistics View**: 
   - Click "Stats" tab to view metrics
   - See real-time user count updates

3. **Repository View**: 
   - Click "Trending Repos" to see mock GitHub data
   - Observe language-based color coding

## 🔧 Technologies Used

### Frontend
- React 18 with TypeScript
- Axios for HTTP requests
- CSS Grid and Flexbox for layout
- Responsive design principles

### Backend
- Flask 2.3.3
- Flask-CORS for cross-origin requests
- Python 3.13 compatibility

### Development Tools
- Create React App
- Python virtual environments
- Modern ES6+ JavaScript features

## 🌟 Key Features

- **Modern UI/UX**: Gradient backgrounds, hover effects, and smooth transitions
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Type Safety**: Full TypeScript implementation in frontend
- **Error Handling**: Comprehensive error handling and user feedback
- **CORS Support**: Seamless frontend-backend communication
- **Modular Architecture**: Clean separation of concerns

## 🚀 Future Enhancements

- Real GitHub API integration
- User authentication and authorization
- Database persistence (PostgreSQL/MongoDB)
- Real-time updates with WebSockets
- Enhanced MCP server integrations
- Docker containerization
- CI/CD pipeline setup

## 📝 Notes

This application serves as a demonstration of MCP capabilities and modern web development practices. It provides a solid foundation for building more complex applications with AI integration through MCP servers.

The codebase follows best practices for maintainability, scalability, and developer experience.
