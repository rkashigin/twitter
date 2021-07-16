import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import rootSaga from "./saga";
import { TweetsState } from "./ducks/tweets/contracts/state";

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: TweetsState;
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
