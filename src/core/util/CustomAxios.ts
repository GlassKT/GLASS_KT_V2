import axios from "axios";
// import config from "../../config/config.json";

const CustomAxios = axios.create({
  baseURL: "http://10.80.162.255:8080",
  headers: {
    Authorization: localStorage.getItem("Authorization") || null,
  },
});

export default CustomAxios;
