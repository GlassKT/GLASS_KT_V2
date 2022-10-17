import axios from "axios";

const CustomAxios = axios.create({
  baseURL: "http://192.168.87.124:8080",
  headers: {
    Authorization: localStorage.getItem("Authorization") || null,
  },
});

export default CustomAxios;
