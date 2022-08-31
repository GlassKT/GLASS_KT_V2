const useFriend = (id: number) => {
  const refuse = () => {
    console.log("refuse", id);
  };
  const accept = () => {
    console.log("accept", id);
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
