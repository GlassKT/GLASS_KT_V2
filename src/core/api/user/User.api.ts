import CustomAxios from "../../util/CustomAxios";

class User {
  public edituser = async (datas) => {
    const { data } = await CustomAxios.post("/edituser", datas);
    return data;
  };

  public getUser = async () => {
    const id = localStorage.getItem("user");
    const { data } = await CustomAxios.get(`/getuser?id=${id}`);
    return data.data;
  };
}

export default new User();
