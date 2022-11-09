import axios from "axios";
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
    const id = localStorage.getItem("user"); //http://10.80.161.228:8080 => 현우껄로 변경
    console.log("요청 보냄");
    const { data } = await axios.get(
      `http://192.168.0.16:4080/recommend?user=${id}`
    ); //현우 아이피
    console.log(data);
    return data;
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
}

export default new Friends();
