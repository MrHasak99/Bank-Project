const UserItem = ({ user }) => {
  return (
    <div className="box-container">
      <div className=" box">
        <h1>{user.username}</h1>
        <img src={user.image} alt={`${user.username}'s Profile`} />
        <p>Balance: 521155</p>
        <button>Transfer</button>
      </div>
    </div>
  );
};

export default UserItem;