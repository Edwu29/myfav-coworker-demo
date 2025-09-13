import React, { useState, useEffect } from 'react';
import './App.css';
import UserList from './components/UserList';
import StatsCard from './components/StatsCard';
import RepoList from './components/RepoList';
import UserForm from './components/UserForm';
import { User, Stats, Repository } from './types';
import { apiService } from './services/apiService';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [usersData, statsData, reposData] = await Promise.all([
        apiService.getUsers(),
        apiService.getStats(),
        apiService.getTrendingRepos()
      ]);
      
      setUsers(usersData);
      setStats(statsData);
      setRepos(reposData.repositories);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUserCreated = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  const handleUserDeleted = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  if (loading) {
    return (
      <div className="App">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>MCP Test Application</h1>
        <p>Testing React Frontend with FastAPI Backend</p>
      </header>

      <nav className="App-nav">
        <button 
          className={activeTab === 'users' ? 'active' : ''}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
        <button 
          className={activeTab === 'stats' ? 'active' : ''}
          onClick={() => setActiveTab('stats')}
        >
          Stats
        </button>
        <button 
          className={activeTab === 'repos' ? 'active' : ''}
          onClick={() => setActiveTab('repos')}
        >
          Trending Repos
        </button>
      </nav>

      <main className="App-main">
        {activeTab === 'users' && (
          <div className="users-section">
            <div className="section-header">
              <h2>User Management</h2>
            </div>
            <div className="users-content">
              <UserForm onUserCreated={handleUserCreated} />
              <UserList users={users} onUserDeleted={handleUserDeleted} />
            </div>
          </div>
        )}

        {activeTab === 'stats' && stats && (
          <div className="stats-section">
            <h2>Application Statistics</h2>
            <StatsCard stats={stats} />
          </div>
        )}

        {activeTab === 'repos' && (
          <div className="repos-section">
            <h2>Trending GitHub Repositories</h2>
            <RepoList repositories={repos} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
