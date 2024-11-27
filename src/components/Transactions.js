import React from "react";
import { getYourTransactions } from "../API/auth";
import { useQuery } from "@tanstack/react-query";
import TransactionItems from "./TransactionItems";

const Transactions = () => {
  const { data } = useQuery({
    queryFn: getYourTransactions,
    queryKey: ["transaction"],
  });

  const transactionList = data?.map((transaction) => (
    <TransactionItems transaction={transaction} />
  ));
  return (
    <div className="bg-[#F9E3BE] flex flex-col justify-center items-center ">
      <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
        {transactionList}
      </div>
    </div>
  );
};

export default Transactions;
