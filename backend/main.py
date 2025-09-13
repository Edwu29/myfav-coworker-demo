from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import json

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

# In-memory storage for demo
users_db = [
    {"id": 1, "name": "John Doe", "email": "john@example.com", "role": "admin"},
    {"id": 2, "name": "Jane Smith", "email": "jane@example.com", "role": "user"},
]

@app.route("/")
def root():
    return jsonify({"message": "MCP Test API is running!", "version": "1.0.0"})

@app.route("/api/users", methods=["GET"])
def get_users():
    """Get all users"""
    return jsonify(users_db)

@app.route("/api/users", methods=["POST"])
def create_user():
    """Create a new user"""
    data = request.get_json()
    if not data or not data.get("name") or not data.get("email"):
        return jsonify({"error": "Name and email are required"}), 400
    
    new_user = {
        "id": len(users_db) + 1,
        "name": data["name"],
        "email": data["email"],
        "role": data.get("role", "user")
    }
    users_db.append(new_user)
    return jsonify(new_user), 201

@app.route("/api/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    """Get a specific user by ID"""
    user = next((u for u in users_db if u["id"] == user_id), None)
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user)

@app.route("/api/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    """Delete a user"""
    global users_db
    original_length = len(users_db)
    users_db = [u for u in users_db if u["id"] != user_id]
    
    if len(users_db) == original_length:
        return jsonify({"error": "User not found"}), 404
    
    return jsonify({"message": f"User {user_id} deleted successfully"})

@app.route("/api/github/trending", methods=["GET"])
def get_trending_repos():
    """Simulate getting trending GitHub repositories"""
    # This would normally use the GitHub API, but for demo purposes we'll return mock data
    mock_repos = [
        {"name": "awesome-project", "description": "An awesome open source project", "stars": 1250, "language": "Python"},
        {"name": "react-components", "description": "Reusable React components library", "stars": 890, "language": "JavaScript"},
        {"name": "ml-toolkit", "description": "Machine learning toolkit for beginners", "stars": 2100, "language": "Python"},
        {"name": "web-framework", "description": "Lightweight web framework", "stars": 750, "language": "Go"},
    ]
    return jsonify({"repositories": mock_repos})

@app.route("/api/stats", methods=["GET"])
def get_stats():
    """Get application statistics"""
    return jsonify({
        "total_users": len(users_db),
        "active_sessions": 42,
        "api_calls_today": 1337,
        "uptime_hours": 24.5
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
