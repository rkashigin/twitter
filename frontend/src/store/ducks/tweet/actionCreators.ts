import { LoadingState, TweetState } from "./contracts/state";
import {
  ISetTweetAction,
  IFetchTweetAction,
  ISetTweetLoadingState,
  TweetActionsType,
} from "./contracts/actionTypes";

export const setTweet = (payload: TweetState["data"]): ISetTweetAction => ({
  type: TweetActionsType.SET_TWEET_DATA,
  payload,
});

export const setTweetLoadingState = (
  payload: LoadingState
): ISetTweetLoadingState => ({
  type: TweetActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweet = (payload: string): IFetchTweetAction => ({
  type: TweetActionsType.FETCH_TWEET_DATA,
  payload,
});

export type TweetActions =
  | ISetTweetAction
  | ISetTweetLoadingState
  | IFetchTweetAction;
