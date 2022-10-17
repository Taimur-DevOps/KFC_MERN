import axios from "axios";

const PostOrders = (resData) => {
  const api = "http://localhost:8080/api/orders/";

  console.log("hello", resData);
  const response = axios.post(api, resData);

  console.log("hello world", response);
  return response;
};






export { PostOrders };
