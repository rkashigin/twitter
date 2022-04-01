import { Action } from "redux";
import { LoadingState, TagsState } from "./contracts/state";

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

export const setTags = (payload: TagsState["items"]): ISetTagsAction => ({
  type: TagsActionsType.SET_ITEMS,
  payload,
});

export const setTagsLoadingState = (
  payload: LoadingState
): ISetTagsLoadingState => ({
  type: TagsActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTags = (): IFetchTagsAction => ({
  type: TagsActionsType.FETCH_ITEMS,
});

export type TagsActions =
  | ISetTagsAction
  | ISetTagsLoadingState
  | IFetchTagsAction;
