import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import PrivateRoute from "../routes/Private.routes";

function UserProfile({ token }) {
  const [user, setUser] = useState("");

  useEffect(() => {
    // Make an API call to check if the user is logged in
    fetch(`http://localhost:8080/api/loggedin?token=${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // console.log(response)
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("User not logged in");
        }
      })
      .then((data) => {
        console.log(data);
        // localStorage.setItem("token", data.token);
        // console.log(data.token)
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [token]);

  return (
    <div>
      {user ? (
        <div>
          {/* <h1>HENLO </h1> */}
          <Navigate to={"/user/dashboard"} element={<PrivateRoute />} />
        </div>
      ) : (
        <p className="text-red-700">Please log in to view your profile.</p>
      )}
    </div>
  );
}

export default UserProfile;
