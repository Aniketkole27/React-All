import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { users, login, logout } = useAuth();

  const handleSignIn = (e) => {
    e.peventDefault();
    
  };

  return (
    <>
      <h2>Sign In</h2>
      <form onSubmit={() => handleSignIn}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={() => setEmail(e.target.value)}
            name="email"
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={() => setPassword(e.target.value)}
            name="password"
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

export default SignIn;
