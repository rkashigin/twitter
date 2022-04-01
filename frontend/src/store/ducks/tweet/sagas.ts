import { put, call, takeEvery } from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import { LoadingState } from "./contracts/state";
import {
  setTweet,
  TweetActionsType,
  setTweetLoadingState,
  IFetchTweetAction,
} from "./actionCreators";
import { Tweet } from "../tweets/contracts/state";

export function* fetchTweetRequest({ payload: tweetId }: IFetchTweetAction) {
  try {
    // @ts-ignore
    const data: Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweet(data[0]));
  } catch (e) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET_DATA, fetchTweetRequest);
}
