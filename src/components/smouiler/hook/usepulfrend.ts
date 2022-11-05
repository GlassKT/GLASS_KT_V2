import axios from "axios";

class usePulfrend {
  public componentDidMount = async () => {
    const response: any = await axios
      .get("http://192.168.1.183:3080/recommend?user=aaaa")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  };
}

export default new usePulfrend();
