import * as React from "react";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
// import Users from "./Users";
const Users = React.lazy(() => import("./Users")); //dynamic import
import UserDetials from "./UserDetials";
import Navbar from "./Navbar";
import Layout from "./Layout";
import Profile from "./Profile";
import Login from "./Login";
import RequireAuth from "./RequireAuth";
import CakeView from "./store/CakeView";
import IcecreamView from "./store/IcecreamView";
import UserList from "./UserList";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/users"
          element={
            <React.Suspense fallback="Loading......">
              <Users />
            </React.Suspense>
          }
        >
          <Route path=":userId" element={<UserDetials />} />
        </Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );

  return (
    <>
      <h1>
        {/* <CakeView />
        <IcecreamView /> */}
        <UserList />
      </h1>
    </>
  );
};

export default App;
