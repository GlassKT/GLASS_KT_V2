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

  public addhobby = async (datas) => {
    console.log(datas);
    const { data } = await CustomAxios.post(`/addhobby`, datas);
    return data.data;
  };
}

export default new User();
