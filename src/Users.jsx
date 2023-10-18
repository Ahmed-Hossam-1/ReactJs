import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [serach, setSearch] = useSearchParams();
  const showActive = serach.get("filter") === "active";
  return (
    <>
      <div>
        <Link to="1">User 1</Link>
        <Link to="2">User 2</Link>
        <Link to="3">User 3</Link>
      </div>
      <div>
        <Outlet />
      </div>
      <button onClick={() => setSearch({ filter: "active" })}>Active</button>
      <button onClick={() => setSearch({})}>All</button>
      {showActive ? <h2>active user</h2> : <h2>All Users</h2>}
    </>
  );
};

export default Users;
