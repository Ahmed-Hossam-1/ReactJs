import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./featchers/users/userSlice";

const UserList = () => {
  const dipatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users);
  useEffect(() => {
    dipatch(fetchUsers());
  }, []);
  return (
    <div>
      {users?.data.map((user) => (
        <h1 key={user.id}>{user.username}</h1>
      ))}
    </div>
  );
};

export default UserList;
