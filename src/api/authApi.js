import api from "./request";

const endpoints = {
  register: "/auth/register/",
  login: "/auth/login/",
  logout: "/auth/logout/",
};

export async function register(email, password) {
  return api.post(endpoints.register, { email, password });
}

export async function login(email, password) {
  return api.post(endpoints.login, { email, password });
}

export async function logout(refreshToken) {
  return api.post(endpoints.logout, { refresh: refreshToken });
}