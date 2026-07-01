// ProtectRouting.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../utilty/AuthProvider"; // Keeping your path, but consider renaming folder to 'utility'

function ProtectRouting({ children }) {
  const { isAuthenticated } = useAuth();

  // 1. Professional Loading State (Use a clean spinner instead of raw text)
  if (isAuthenticated === null) {
    return (
      <div className={style.spinnerContainer}>
        <div className={style.spinner}></div>
      </div>
    );
  }

  // 2. Clean Return (Using React Fragments '<>' instead of layout-breaking divs)
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
}

export default ProtectRouting;
