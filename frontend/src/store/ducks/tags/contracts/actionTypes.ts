import { Action } from "redux";
import { LoadingState, TagsState } from "./state";

export enum TagsActionsType {
  SET_ITEMS = "tags/SET_ITEMS",
  FETCH_ITEMS = "tags/FETCH_ITEMS",
  SET_LOADING_STATE = "tags/SET_LOADING_STATE",
}

export interface ISetTagsAction extends Action<TagsActionsType> {
  type: TagsActionsType.SET_ITEMS;
  payload: TagsState["items"];
}

export interface ISetTagsLoadingState extends Action<TagsActionsType> {
  type: TagsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface IFetchTagsAction extends Action<TagsActionsType> {
  type: TagsActionsType.FETCH_ITEMS;
}
