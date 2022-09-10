import axios from "axios";

const BASE_URL = "http://localhost:5000";

function SignUp(body) {
  return axios.post(`${BASE_URL}/register`, body);
}

function SendLogin(body) {
  return axios.post(`${BASE_URL}/login`, body);
}

export { SignUp, SendLogin };
