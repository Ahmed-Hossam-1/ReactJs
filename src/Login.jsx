import React, { useState } from "react";
import { useAuth } from "./context/Auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navegate = useNavigate();
  const { login } = useAuth();
  const [inputRef, setInputRef] = useState("");
  const location = useLocation();
  const reDirect = location.state?.path || "/";
  // console.log(reDirect);
  const handleSubmit = (e) => {
    e.preventDefault();
    login(inputRef);
    setInputRef("");
    navegate(reDirect, { replace: true });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={inputRef}
          onChange={(e) => setInputRef(e.target.value)}
        />
        <button onSubmit={handleSubmit} type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
