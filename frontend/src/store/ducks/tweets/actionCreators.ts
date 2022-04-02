import {
  AddFormState,
  LoadingState,
  Tweet,
  TweetsState,
} from "./contracts/state";
import {
  ISetAddFormStateAction,
  ISetTweetsAction,
  IFetchTweetsAction,
  IFetchAddTweetAction,
  IAddTweetAction,
  ISetTweetsLoadingState,
  TweetsActionsType,
} from "./contracts/actionTypes";

export const setTweets = (payload: TweetsState["items"]): ISetTweetsAction => ({
  type: TweetsActionsType.SET_ITEMS,
  payload,
});

export const fetchAddTweet = (payload: string): IFetchAddTweetAction => ({
  type: TweetsActionsType.FETCH_ADD_TWEET,
  payload,
});

export const addTweet = (payload: Tweet): IAddTweetAction => ({
  type: TweetsActionsType.ADD_TWEET,
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

export const setAddFormState = (
  payload: AddFormState
): ISetAddFormStateAction => ({
  type: TweetsActionsType.SET_ADD_FORM_STATE,
  payload,
});

export type TweetsActions =
  | ISetTweetsAction
  | IFetchTweetsAction
  | ISetTweetsLoadingState
  | IFetchAddTweetAction
  | IAddTweetAction;
