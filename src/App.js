import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { User, Complain, Admin } from "./components/";
import { Register } from "./pages";
import Login from "./pages/Login";
import "./index.css";
import PrivateRoute from "./routes/Private.routes";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<PrivateRoute />}>
            <Route path={"complain"} element={<Complain />} />
            <Route path={"dashboard"} element={<Admin />} />
          </Route>

          {/* User Routes */}
          <Route path="/user" element={<PrivateRoute />}>
            <Route path={"dashboard"} element={<User />} />
            <Route path={"complain"} element={<Complain />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
