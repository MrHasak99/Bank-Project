import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getYourProfile } from "../API/auth";

const Profile = () => {
  const { data } = useQuery({
    queryFn: getYourProfile,
    queryKey: ["profile"],
  });
  return (
    <div>
      <div className="div-profile">
        <img src={data?.image} alt={`${data?.username}'s Profile`}></img>
        <h1>{data?.username}</h1>
        <h2>Balance: {data?.balance}</h2>
      </div>
    </div>
  );
};

export default Profile;
