import React from "react";
import { useAuth } from "./context/Auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navegate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navegate("/");
  };
  return (
    <div>
      <h1>Welcome {user}</h1>
      <button type="button" onClick={() => handleLogout()}>
        logout
      </button>
    </div>
  );
};

export default Profile;
