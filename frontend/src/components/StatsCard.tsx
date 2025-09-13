import React from 'react';
import { Stats } from '../types';

interface StatsCardProps {
  stats: Stats;
}

const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
  return (
    <div className="stats-card">
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">{stats.total_users}</div>
          <div className="stat-label">Total Users</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{stats.active_sessions}</div>
          <div className="stat-label">Active Sessions</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{stats.api_calls_today.toLocaleString()}</div>
          <div className="stat-label">API Calls Today</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value">{stats.uptime_hours.toFixed(1)}h</div>
          <div className="stat-label">Uptime</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
