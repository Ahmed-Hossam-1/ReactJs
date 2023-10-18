import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import { useAuth } from "./context/Auth";
const Navbar = () => {
  const { user } = useAuth();
  const nave = useNavigate();
  return (
    <div
      style={{ width: "100%", display: "flex", justifyContent: "space-around" }}
    >
      <Link to="/">Home</Link>
      <Link to="/product">product</Link>
      <Link to="/users">users</Link>
      <Link to="/profile">profile</Link>
      {user === null && <button onClick={() => nave("/login")}>login</button>}
    </div>
  );
};

export default Navbar;
