import CustomAxios from "../../util/CustomAxios";
import { AuthInterfaceLogin, AuthInterfaceJoin } from "./auth.interface";

class Auth {
  public async login(data: AuthInterfaceLogin) {
    const { id, pw } = data;
    try {
      const response = await CustomAxios.post("/login", {
        id,
        pw,
      });
      localStorage.setItem("Authorization", response.data.accessToken);
      return true;
    } catch (e) {
      return false;
    }
  }

  public async register(data: AuthInterfaceJoin) {
    const { id, pw, email, name } = data;
    const reg = /\W/;

    try {
      let response;
      if (!reg.test(id)) {
        response = await CustomAxios.post("/signup", {
          id,
          pw,
          name,
          email,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  public async loginCheck() {
    try {
      await CustomAxios.post("/glasskt");
      return true;
    } catch (e) {
      // console.log(e.response.data.message === "vaild error");
      return false;
    }
  }

  public async logout() {
    try {
      await CustomAxios.post("/logout");
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default new Auth();
