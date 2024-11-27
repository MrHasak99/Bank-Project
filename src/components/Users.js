import React from "react";
import { getAllUsers } from "../API/auth";
import { useQuery } from "@tanstack/react-query";
import UserItem from "./UserItem";

const Users = () => {
  const { data } = useQuery({
    queryFn: getAllUsers,
    queryKey: ["users"],
  });

  const userList = data?.map((user) => <UserItem user={user} />);
  return <div>{userList}</div>;
};

export default Users;
