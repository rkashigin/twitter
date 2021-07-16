import axios from "axios";
import { TweetsState } from "../../store/ducks/tweets/contracts/state";

export const TweetsApi = {
  fetchTweets(): Promise<TweetsState["items"]> {
    return axios
      .get("https://trycode.pw/c/YW2KV.json")
      .then(({ data }) => data);
  },
};
