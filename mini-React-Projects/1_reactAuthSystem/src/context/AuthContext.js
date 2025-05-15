import { createContext, useContext } from "react";

 const AuthContext = createContext({
  allUser: [
    {
      id: Date.now(),
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
    },
  ],
  login: (user) => {},
  logout: (id) => {},
  register: (user) => {},
  isAuthenticated: false,
});

export const AuthProvider = AuthContext.Provider;

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
