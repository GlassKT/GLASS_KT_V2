import CustomAxios from "../../util/CustomAxios";

class Friends {
  public async getWaitFriend(setWaitFriends) {
    try {
      const value = await CustomAxios.get(
        `/getwaitfriend?user=${localStorage.getItem("user")}`
      );
      return value.data.data;
    } catch (e) {
      console.log(e);
    }
  }

  public async acceptFriend(id: any) {
    const value = await CustomAxios.post(`/acceptfriend`, {
      user: localStorage.getItem("user"),
      friend: id,
    });
  }

  public async refuseFriend(id: any) {
    const value = await CustomAxios.post(`/deletefriend`, {
      user: localStorage.getItem("user"),
      friend: id,
    });
  }

  public async getFriend(setFriends: any) {
    try {
      const value = await CustomAxios.get(
        `/getfriend?user=${localStorage.getItem("user")}`
      );
      return value.data.data;
    } catch (e) {
      console.log(e);
    }
  }

  public async getBlockFriend(setBlock: any) {
    const value = await CustomAxios.get(
      `/getblockfriend?user=${localStorage.getItem("user")}`
    );
    setBlock(value.data.data);
  }

  public async blockFriend(id: any) {
    const value = await CustomAxios.post(`/blockfriend`, {
      user: localStorage.getItem("user"),
      friend: id,
    });
  }
}

export default new Friends();
