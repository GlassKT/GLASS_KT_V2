import { AuthInterfaceLogin, AuthInterfaceJoin } from "./auth.interface";

class Auth {
  public async login(data: AuthInterfaceLogin) {
    await console.log(data);
  }
  public async register(data: AuthInterfaceJoin) {
    const { id } = data;
    const reg = /\W/;

    if (!reg.test(id)) {
      console.log(data);
    }
  }
}

export default new Auth();
