import React from 'react';
import { User } from '../types';
import { apiService } from '../services/apiService';

interface UserListProps {
  users: User[];
  onUserDeleted: (userId: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onUserDeleted }) => {
  const handleDelete = async (userId: number) => {
    try {
      await apiService.deleteUser(userId);
      onUserDeleted(userId);
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user');
    }
  };

  return (
    <div className="user-list">
      <h3>Users ({users.length})</h3>
      {users.length === 0 ? (
        <p className="no-users">No users found</p>
      ) : (
        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-info">
                <h4>{user.name}</h4>
                <p className="user-email">{user.email}</p>
                <span className={`user-role ${user.role}`}>{user.role}</span>
              </div>
              <button 
                className="delete-btn"
                onClick={() => user.id && handleDelete(user.id)}
                title="Delete user"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
