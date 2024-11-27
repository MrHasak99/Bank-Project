import React from "react";

const UserItem = ({ user }) => {
  return (
    <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
      <h1 className="text-md font-bold">{user.username}</h1>
      <img
        src={user.image}
        alt={`${user.username}'s Profile`}
        className="w-[200px] rounded-md"
      />
    </div>
  );
};

export default UserItem;
