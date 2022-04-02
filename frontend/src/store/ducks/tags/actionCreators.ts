import {
  IFetchTagsAction,
  ISetTagsAction,
  ISetTagsLoadingState,
  TagsActionsType,
} from "./contracts/actionTypes";
import { LoadingState, TagsState } from "./contracts/state";

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
