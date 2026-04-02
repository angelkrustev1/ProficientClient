import api from "./request";

const endpoints = {
  register: "/auth/register/",
  login: "/auth/login/",
  logout: "/auth/logout/",
  changeEmail: "/auth/change-email/",
  changePassword: "/auth/change-password/",
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

export async function changeEmail(newEmail, currentPassword) {
  return api.patch(endpoints.changeEmail, {
    new_email: newEmail,
    current_password: currentPassword,
  });
}

export async function changePassword(
  currentPassword,
  newPassword,
  confirmNewPassword
) {
  return api.post(endpoints.changePassword, {
    current_password: currentPassword,
    new_password: newPassword,
    confirm_new_password: confirmNewPassword,
  });
}