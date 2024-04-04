import React, { useState } from "react";
import UserProfile from "./UserProfile";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setLoggedIn(true);
        setError("");
      } else {
        setError("Invalid email or password");
        if (email == "") {
          setErrorEmail("Please! Enter Email");
        }
        if (password == "") {
          setErrorPassword("Please! Enter Password");
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error occurred while logging in");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg shadow-amber-400">
        {loggedIn ? (
          <>
            <p className="text-center text-green-500">You are logged in!</p>
            <UserProfile token={token} />
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
            {errorEmail && (
              <p className="text-red-500 mb-4">{errorEmail}</p>
            )}{" "}
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorPassword && (
              <p className="text-red-500 mb-4">{errorPassword}</p>
            )}{" "}
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
            <div className="flex gap-10 items-center justify-center">
              <button
                onClick={handleLogin}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Log In
              </button>
              <a href="/register" className="text-green-500 hover:underline">
                Register
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
