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

  public async recommendFriend() {
    const id = localStorage.getItem("user");
    const { data } = await CustomAxios.get(`/recommandfriendfriends?id=${id}`);
    console.log(data.data);
    return data.data;
  }

  public async addChatRoom(friendid) {
    const id = localStorage.getItem("user");
    const { data } = await CustomAxios.post(`/addchatroom`, {
      id,
      friendid,
    });
    console.log(data);
    return data;
  }

  public async addChatMember(roomnum) {
    const id = localStorage.getItem("user");
    const { data } = await CustomAxios.post(`/addchatmember`, {
      id,
      roomnum,
    });

    console.log(data);
  }

  public async chattinghisyory(roomnum) {
    const { data } = await CustomAxios.get(
      `/chattinghisyory?roomnum=${roomnum}`
    );

    return data;
  }

  public async getChatMember(id) {
    const { data } = await CustomAxios.get(`/getmychatting?id=${id}`);
    console.log(data);
    return data;
  }
}

export default new Friends();
