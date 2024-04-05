import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({user}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
        const response = await fetch(
          `http://localhost:8080/api/loggedin?token=${token}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          setLoggedIn(true);
        } else {
          console.error("Error checking login status:", response.statusText);
          setLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        setLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };
    checkLoggedIn();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return <>{loggedIn ? <Outlet user={user} /> : <Navigate to={"/"} />}</>;
};

export default PrivateRoute;
