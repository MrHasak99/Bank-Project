const TransactionItems = ({ transaction }) => {
  return (
    <div>
      <div className="div-trans">
        <h1>{transaction.amount}</h1>
        <h2>{transaction.type}</h2>
      </div>
    </div>
  );
};

export default TransactionItems;
