import { useState } from "react";
import { transferToAnotherUserFromYourAccount } from "../API/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const UserItem = ({ user }) => {
  const [value, setValue] = useState(0);
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: (newValueData) =>
      transferToAnotherUserFromYourAccount(newValueData),
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const handleTransfer = () => {
    mutate.mutate({ amount: value, username: user.username });
  };

  return (
    <div className="box-container">
      <div className=" box">
        <h1>{user.username}</h1>
        <img src={user.image} alt={`${user.username}'s Profile`} />
        <p>Balance: {user.balance}</p>
        <input
          type="number"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Enter Desired Amount Here"
        ></input>
        <button onClick={handleTransfer}>Transfer</button>
      </div>
    </div>
  );
};

export default UserItem;
