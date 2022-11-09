import axios from "axios";
// import config from "../../config/config.json";

const CustomAxios = axios.create({
  baseURL: "http://192.168.227.124:8080",
  headers: {
    Authorization: localStorage.getItem("Authorization") || null,
  },
});

export default CustomAxios;
