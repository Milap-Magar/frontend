import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.component";
import { Login, Register } from "./pages";
import "./index.css";
import PrivateRoute from "./routes/Private.routes";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/register"} element={<Register />} />
          <Route path={"/"} element={<Login />}  />
          {/* <PrivateRoute component={Dashboard} path="/dashboard"  /> */}
          <Route path={"/dashboard"} element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
