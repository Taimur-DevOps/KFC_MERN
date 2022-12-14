//services is only for making an http request and sending the data back and setting data in local storage
import axios from "axios";

const API_URL = "http://localhost:8080/api/users/";

//register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//user Logout

const logout = () => {
  localStorage.removeItem("user");
};

// ____________________________________________________---






const authService = {
  register,
  logout,
  login,
};

export default authService;
