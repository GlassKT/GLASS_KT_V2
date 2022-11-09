import axios from "axios";
// import config from "../../config/config.json";

const CustomAxios = axios.create({
  baseURL: "http://192.168.0.24:8080",
  headers: {
    Authorization: localStorage.getItem("Authorization") || null,
  },
});

export default CustomAxios;
