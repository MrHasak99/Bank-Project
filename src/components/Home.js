import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getYourProfile } from "../API/auth";

const Home = () => {
  const { data } = useQuery({
    queryFn: getYourProfile,
    queryKey: ["profile"],
  });

  return (
    <div>
      <h1>Welcome {data.username}</h1>
    </div>
  );
};

export default Home;
