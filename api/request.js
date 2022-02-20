import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:8080",
  baseURL: 'http://44.202.134.120:8080',
  timeout: 1000,
});


export default instance;