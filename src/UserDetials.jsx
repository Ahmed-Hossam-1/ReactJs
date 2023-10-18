import { useParams } from "react-router-dom";

const UserDetials = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>User {userId}</h1>
    </div>
  );
};

export default UserDetials;
