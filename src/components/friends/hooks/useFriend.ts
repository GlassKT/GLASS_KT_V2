import FriendsApi from "../../../core/api/friends/Friends.api";

const useFriend = (id: number) => {
  const refuse = () => {
    FriendsApi.refuseFriend(id);
  };
  const accept = () => {
    FriendsApi.acceptFriend(id);
  };
  const remove = () => {
    console.log("remove", id);
  };
  const chat = () => {
    console.log("chat", id);
  };
  const block = () => {
    console.log("block", id);
  };

  return { refuse, accept, remove, chat, block };
};

export default useFriend;
