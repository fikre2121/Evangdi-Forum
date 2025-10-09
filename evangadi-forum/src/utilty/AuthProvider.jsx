import React, { createContext, useContext, useEffect, useState } from "react";
import axiosBase from "../api/axiosBase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [username, setUsername] = useState(null); 

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username"); 

    if (!token) {
      setIsAuthenticated(false);
      setUsername(null);
      return;
    }

    const verifyToken = async () => {
      try {
        await axiosBase.get("/users/check", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsAuthenticated(true);
        setUsername(storedUsername); 
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setIsAuthenticated(false);
        setUsername(null);
      }
    };

    verifyToken();
  }, []);

  //  For login
  const login = (token, username) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    setIsAuthenticated(true);
    setUsername(username);
  };

  //  For logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsAuthenticated(false);
    setUsername(null);
  };

  return (
    
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>

  );
};

export const useAuth = () => useContext(AuthContext);
