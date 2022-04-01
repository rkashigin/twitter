import { Action } from "redux";
import { LoadingState, TweetState } from "./contracts/state";

export enum TweetActionsType {
  SET_TWEET_DATA = "tweet/SET_TWEET_DATA",
  FETCH_TWEET_DATA = "tweet/FETCH_TWEET_DATA",
  SET_LOADING_STATE = "tweet/SET_LOADING_STATE",
}

export interface ISetTweetAction extends Action<TweetActionsType> {
  type: TweetActionsType.SET_TWEET_DATA;
  payload: TweetState["data"];
}

export interface ISetTweetLoadingState extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface IFetchTweetAction extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_TWEET_DATA;
  payload: string;
}

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
