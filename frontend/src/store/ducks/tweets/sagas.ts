import { put, call, takeEvery } from "redux-saga/effects";
import {
  setTweets,
  setTweetsLoadingState,
  TweetsActionsType,
} from "./actionCreators";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { LoadingState } from "./contracts/state";

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_ITEMS, fetchTweetsRequest);
}
