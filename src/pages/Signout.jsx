import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Signout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("login");
    navigate("/login"); // Redirect to dashboard if user is logged in
  }, [navigate]);

  return null;
};

export default Signout;
