const UserItem = ({ user }) => {
  return (
    <>
      <div>
        <h1>{user.username}</h1>
        <img src={user.image} alt={`${user.username}'s Profile`} />
      </div>
    </>
  );
};

export default UserItem;
