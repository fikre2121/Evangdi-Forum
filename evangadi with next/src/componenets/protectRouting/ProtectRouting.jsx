import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../../utilty/AuthProvider";
import { useAuth } from "../../utilty/AuthProvider";
function ProtectRouting({ children }) {
  const { isAuthenticated } = useAuth();
 

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }
  return <div>{isAuthenticated ? children : <Navigate to="/" />}</div>;
}

export default ProtectRouting;
