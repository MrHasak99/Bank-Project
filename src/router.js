import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Nav from "./components/Nav";
import Transactions from "./components/Transactions";
import Users from "./components/Users";
import Profile from "./components/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Nav />
        <Home />
      </div>
    ),
  },
  {
    path: "/trips",
    element: (
      <div>
        <Nav />
        <Transactions />
      </div>
    ),
  },
  {
    path: "/details/:slug",
    element: (
      <div>
        <Nav />
        <Users />
      </div>
    ),
  },
  {
    path: "/trips",
    element: (
      <div>
        <Nav />
        <Profile />
      </div>
    ),
  },
]);

export default router;
