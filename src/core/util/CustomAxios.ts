import axios from "axios";
const CustomAxios = axios.create({
  baseURL: "http://10.80.162.26:8080",
  headers: {
    Authorization: localStorage.getItem("Authorization") || null,
  },
});

export default CustomAxios;