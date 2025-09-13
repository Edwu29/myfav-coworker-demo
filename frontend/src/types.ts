export interface User {
  id?: number;
  name: string;
  email: string;
  role: string;
}

export interface Stats {
  total_users: number;
  active_sessions: number;
  api_calls_today: number;
  uptime_hours: number;
}

export interface Repository {
  name: string;
  description?: string;
  stars: number;
  language?: string;
}
