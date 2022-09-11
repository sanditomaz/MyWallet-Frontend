import axios from "axios";

const BASE_URL = "http://localhost:5000";

function SignUp(body) {
  return axios.post(`${BASE_URL}/register`, body);
}

function SendLogin(body) {
  return axios.post(`${BASE_URL}/login`, body);
}

function ListData(config) {
  return axios.get(`${BASE_URL}/home`, config);
}

function AddValue(body, config) {
  return axios.post(`${BASE_URL}/addmoney`, body, config);
}

function AddWithdraw(body, config) {
  return axios.post(`${BASE_URL}/withdraw`, body, config);
}

export { SignUp, SendLogin, ListData, AddValue, AddWithdraw };
