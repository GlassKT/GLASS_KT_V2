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
    return data.data;
  };
}

export default new User();
