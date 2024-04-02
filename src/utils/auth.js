import { useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Your login logic here
    // Assuming login is successful, set isAuthenticated to true
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Your logout logic here
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};
