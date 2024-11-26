import instance from "./index";
import storeToken from "./auth";

async function login(formData) {
  const response = await instance.post(
    "/mini-project/api/auth/login",
    formData
  ); // Data required (username, password).
  console.log("login", response);
  return response;
}

async function getYourProfile() {
  const response = await instance.get("/mini-project/api/auth/me"); // Data required: (NO DATA). & LOGIN REQUIERED
  console.log("getYourProfile", response);
  return response;
}

async function getYourTransactions() {
  const response = await instance.get("/mini-project/api/transactions/my"); // Data required: (NO DATA). & LOGIN REQUIERED
  console.log("getYourTransactions", response);
  return response;
}

async function getAllUsers() {
  const response = await instance.get("/mini-project/api/auth/users"); // Data required: (NO DATA) & LOGIN REQUIERED.
  console.log("getAllUsers", response);
  return response;
}

async function updateYourProfile({ image }) {
  const response = await instance.put("/mini-project/api/auth/profile"); // Data required: (image). & LOGIN REQUIERED
  console.log("updateYourProfile", response);
  return response;
}

async function depositToYourAccount() {
  const response = await instance.put("/mini-project/api/transactions/deposit"); // Data required: (amount). & LOGIN REQUIERED
  console.log("depositToYourAccount", response);
  return response;
}

async function withdrawFromYourAccount() {
  const response = await instance.put(
    "/mini-project/api/transactions/withdraw"
  ); // Data required: (amount). & LOGIN REQUIERED
  console.log("withdrawFromYourAccount", response);
  return response;
}

async function transferToAnotherUserFromYourAccount({ amount, username }) {
  const response = await instance.put(
    `/mini-project/api/transactions/transfer/${username}`,
    {
      amount,
    },
    { headers }
  ); // Data required: (amount, username) & LOGIN REQUIERED
  console.log("transferToAnotherUserFromYourAccount", response);
  return response;
}

async function getUserInfoByUserUserId(userId) {
  const response = await instance.get(
    `/mini-project/api/auth/user/${userId.id}`
  ); // Data required: (NO DATA).
  console.log("getUserInfoByUserUserId", response);
  return response;
}
export {
  register,
  login,
  getYourProfile,
  getYourTransactions,
  getAllUsers,
  updateYourProfile,
  depositToYourAccount,
  withdrawFromYourAccount,
  transferToAnotherUserFromYourAccount,
  getUserInfoByUserUserId,
};
