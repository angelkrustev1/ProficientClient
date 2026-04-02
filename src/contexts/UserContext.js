import { createContext } from 'react';

export const UserContext = createContext({
  email: '',
  accessToken: '',
  refreshToken: '',
  isAuthenticated: false,
  userLoginHandler: () => null,
  userLogoutHandler: () => null,
  updateUserEmail: () => null,
});