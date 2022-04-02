import produce, { Draft } from "immer";
import { AddFormState, LoadingState, TweetsState } from "./contracts/state";
import { TweetsActions } from "./actionCreators";
import { TweetsActionsType } from "./contracts/actionTypes";

const initialTweetsState: TweetsState = {
  items: [],
  addFormState: AddFormState.NEVER,
  loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
      case TweetsActionsType.SET_ITEMS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;

      case TweetsActionsType.FETCH_ITEMS:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        break;

      case TweetsActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      case TweetsActionsType.FETCH_ADD_TWEET:
        draft.addFormState = AddFormState.LOADING;
        break;

      case TweetsActionsType.ADD_TWEET:
        draft.items.push(action.payload);
        draft.addFormState = AddFormState.NEVER;
        break;

      default:
        break;
    }
  },
  initialTweetsState
);
