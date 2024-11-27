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
      <div className="div-profile">Welcome {data?.username}</div>
    </div>
  );
};

export default Profile;
