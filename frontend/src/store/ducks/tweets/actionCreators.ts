import { Action } from "redux";
import { LoadingState, TweetsState } from "./contracts/state";

export enum TweetsActionsType {
  SET_ITEMS = "tweets/SET_ITEMS",
  FETCH_ITEMS = "tweets/FETCH_ITEMS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
}

export interface ISetTweetsAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_ITEMS;
  payload: TweetsState["items"];
}

export interface ISetTweetsLoadingState extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface IFetchTweetsAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_ITEMS;
}

export const setTweets = (payload: TweetsState["items"]): ISetTweetsAction => ({
  type: TweetsActionsType.SET_ITEMS,
  payload,
});

export const setTweetsLoadingState = (
  payload: LoadingState
): ISetTweetsLoadingState => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweets = (): IFetchTweetsAction => ({
  type: TweetsActionsType.FETCH_ITEMS,
});

export type TweetsActions =
  | ISetTweetsAction
  | IFetchTweetsAction
  | ISetTweetsLoadingState;
