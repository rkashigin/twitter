import { put, call, takeEvery } from "redux-saga/effects";
import { TagsApi } from "../../../services/api/tagsApi";
import { LoadingState } from "./contracts/state";
import {
  setTags,
  setTagsLoadingState,
  TagsActionsType,
} from "./actionCreators";

export function* fetchTagsRequest(): any {
  try {
    const items = yield call(TagsApi.fetchTags);
    yield put(setTags(items));
  } catch (e) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

export function* tagsSaga() {
  yield takeEvery(TagsActionsType.FETCH_ITEMS, fetchTagsRequest);
}
