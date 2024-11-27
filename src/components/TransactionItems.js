const TransactionItems = ({ transaction }) => {
  return (
    <>
      <div>
        <h1>{transaction.amount}</h1>
      </div>
    </>
  );
};

export default TransactionItems;
