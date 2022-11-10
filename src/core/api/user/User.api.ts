import axios from "axios";
import CustomAxios from "../../util/CustomAxios";

class User {
  public edituser = async (datas) => {
    console.log(datas);
    const { data } = await CustomAxios.post("/edituser", datas);
    console.log(data);
    return data;
  };

  public getUser = async () => {
    const id = localStorage.getItem("user");
    const { data } = await CustomAxios.get(`/getuser?id=${id}`);
    console.log(data);
    return data.data;
  };
  public async imageupload(datas) {
    console.log("image");
    console.log("datas :" + datas);
    for (const keyValue of datas) console.log(keyValue);
    const { data } = await axios.post(`http://192.168.0.24/upload`, datas);
    console.log(data);
    return data;
  }
  public addhobby = async (datas) => {
    console.log(datas);
    const id = localStorage.getItem("user");
    const { data } = await CustomAxios.post(`/addhobby?user=${id}`, datas);
    console.log(data);
    console.log(data.data);

    return data.data;
  };
}

export default new User();
