const TransactionItems = ({ transaction }) => {
  return (
    <div>
      <div className="div-trans">
        <h1>{transaction.amount}</h1>
      </div>
    </div>
  );
};

export default TransactionItems;
