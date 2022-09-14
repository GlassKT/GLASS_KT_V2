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
      await CustomAxios.post("");
      return true;
    } catch (e) {
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

  public async emailSend(email: string) {
    try {
      const { data } = await CustomAxios.get(`/emailauth?email=${email}`);
      console.log(data);
      return data;
    } catch (e) {
      return false;
    }
  }
}

export default new Auth();
