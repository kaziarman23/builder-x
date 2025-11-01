import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export async function saveConfig(userId, config, token) {
  return axios.post(
    `${API_BASE}/api/editing/save`,
    { userId, config },
    {
      headers: { Authorization: token ? `Bearer ${token}` : "" },
    }
  );
}

export async function loadConfig(userId) {
  return axios.get(`${API_BASE}/api/editing/get?userId=${userId}`);
}
