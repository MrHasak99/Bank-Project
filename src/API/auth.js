import instance from "./api";

const register = async (formData) => {
  const data = await instance.post("/mini-project/api/auth/register", formData);
  localStorage.setItem("token", data.token);
  console.log("register data", data);
  return data;
};
const login = async (formData) => {
  const data = await instance.post("/mini-project/api/auth/login", formData); // Data required (username, password).
  localStorage.setItem("token", data.token);
  console.log("login data", data);
  return data;
};

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

async function depositToYourAccount(data) {
  const response = await instance.put(
    "/mini-project/api/transactions/deposit",
    data
  ); // Data required: (amount). & LOGIN REQUIERED
  console.log("depositToYourAccount", response);
  return response;
}

async function withdrawFromYourAccount(data) {
  const response = await instance.put(
    "/mini-project/api/transactions/withdraw",
    data
  ); // Data required: (amount). & LOGIN REQUIERED
  console.log("withdrawFromYourAccount", response);
  return response;
}

async function transferToAnotherUserFromYourAccount({ amount, username }) {
  const response = await instance.put(
    `/mini-project/api/transactions/transfer/${username}`,
    {
      amount,
    }
    // { headers }
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
