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
  return (
    <div className="bg-[#F9E3BE] flex flex-col justify-center items-center ">
      <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
        {userList}
      </div>
    </div>
  );
};

export default Users;
