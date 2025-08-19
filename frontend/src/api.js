const API_BASE = import.meta.env.VITE_API_BASE;

export const fetchLeaderboard = async () =>
  (await fetch(`${API_BASE}/leaderboard`)).json();

export const addUser = async (name) =>
  (await fetch(`${API_BASE}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  })).json();

export const claimPoints = async (userId) =>
  (await fetch(`${API_BASE}/claim/${userId}`, { method: "POST" })).json();

export const fetchHistory = async (userId) =>
  (await fetch(`${API_BASE}/history/${userId}`)).json();
