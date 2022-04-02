import { Action } from "redux";
import { AddFormState, LoadingState, Tweet, TweetsState } from "./state";

export enum TweetsActionsType {
  SET_ITEMS = "tweets/SET_ITEMS",
  FETCH_ITEMS = "tweets/FETCH_ITEMS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
  FETCH_ADD_TWEET = "tweets/FETCH_ADD_TWEET",
  ADD_TWEET = "tweets/ADD_TWEET",
  SET_ADD_FORM_STATE = "tweets/SET_ADD_FORM_STATE",
}

export interface ISetTweetsAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_ITEMS;
  payload: TweetsState["items"];
}

export interface IFetchAddTweetAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_ADD_TWEET;
  payload: string;
}

export interface IAddTweetAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.ADD_TWEET;
  payload: Tweet;
}

export interface ISetTweetsLoadingState extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface IFetchTweetsAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_ITEMS;
}

export interface ISetAddFormStateAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_ADD_FORM_STATE;
  payload: AddFormState;
}
