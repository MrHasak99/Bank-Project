import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  depositToYourAccount,
  getYourProfile,
  withdrawFromYourAccount,
} from "../API/auth";

const Home = () => {
  const [value, setValue] = useState(0);
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryFn: getYourProfile,
    queryKey: ["profile"],
  });

  const deposit = useMutation({
    mutationFn: (newValueData) => depositToYourAccount(newValueData),
    onSuccess: () => {
      queryClient.invalidateQueries("profiles");
    },
  });

  const withdraw = useMutation({
    mutationFn: (newValueData) => withdrawFromYourAccount(newValueData),
    onSuccess: () => {
      queryClient.invalidateQueries("profiles");
    },
  });

  const handleDeposit = () => {
    deposit.mutate({ amount: value });
  };

  const handleWithdraw = () => {
    withdraw.mutate({ amount: value });
  };

  return (
    <div>
      <div className="div-home">
        <img src={data?.image} alt={`${data?.username}'s Profile`}></img>
        <h1>Welcome {data?.username}</h1>
        <h2>Account Balance: {data?.balance}</h2>
        <input
          type="number"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Enter Desired Amount Here"
        ></input>
        <div>
          <button onClick={handleDeposit}>Deposit</button>
          <button onClick={handleWithdraw}>Withdraw</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
