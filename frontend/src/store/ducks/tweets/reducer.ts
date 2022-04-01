import produce, { Draft } from "immer";
import { LoadingState, TweetsState } from "./contracts/state";
import { TweetsActions, TweetsActionsType } from "./actionCreators";

const initialTweetsState: TweetsState = {
  items: [],
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

      default:
        break;
    }
  },
  initialTweetsState
);
