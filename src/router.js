import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Nav from "./components/Nav";
import Transactions from "./components/Transactions";
import Users from "./components/Users";
import Profile from "./components/Profile";
import FirstPage from "./components/FirstPage";
import Register from "./components/Register";
import Login from "./components/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <div>
          <Nav />
        </div>
        <FirstPage />
      </div>
    ),
  },
  {
    path: "/transactions",
    element: (
      <div>
        <Nav />
        <Transactions />
      </div>
    ),
  },
  {
    path: "/users",
    element: (
      <div>
        <Nav />
        <Users />
      </div>
    ),
  },
  {
    path: "/profile",
    element: (
      <div>
        <Nav />
        <Profile />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <Nav />
        <Register />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Nav />
        <Login />
      </div>
    ),
  },
]);

export default router;
