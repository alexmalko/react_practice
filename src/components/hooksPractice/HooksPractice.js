import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

import { useAuth } from "../firebase/context/AuthContext";

function HooksPractice() {
  const { logout } = useAuth();
  // history hook to redirect to a specific URL
  const history = useHistory();
  const [error, setError] = useState("");

  const handleClick = async () => {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch (error) {
      setError("Failed to log out");
    }
  };

  function UpdateProfile() {
    history.push("/update-profile");
  }

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <div>Hello from hooks practice</div>
      <button onClick={handleClick}>Sign out</button>
      <Link to="/profile">Update Profile</Link>
    </>
  );
}

export default HooksPractice;
