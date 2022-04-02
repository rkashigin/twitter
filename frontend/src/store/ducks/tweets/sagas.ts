import { put, call, takeEvery } from "redux-saga/effects";
import { addTweet, setTweets, setTweetsLoadingState } from "./actionCreators";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { LoadingState } from "./contracts/state";
import {
  IFetchAddTweetAction,
  TweetsActionsType,
} from "./contracts/actionTypes";

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* fetchAddTweetRequest({ payload }: IFetchAddTweetAction): any {
  try {
    const data = {
      _id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: "Roman Kashigin",
        username: "r.kashigin",
        avatarUrl: "https://source.unsplash.com/random/100x100?5",
      },
    };
    const item = yield call(TweetsApi.addTweet, data);
    yield put(addTweet(item));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeEvery(TweetsActionsType.FETCH_ITEMS, fetchTweetsRequest);
  yield takeEvery(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
