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
    <div>
      <div>{transactionList}</div>
    </div>
  );
};

export default Transactions;
