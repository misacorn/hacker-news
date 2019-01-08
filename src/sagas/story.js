import { call, put } from "redux-saga/effects";
import { doAddStories, doFetchErrorStories } from "../actions/story";
import { fetchStories } from "../api/story";

function* handleFetchStories(action) {
  const { query } = action;

  try {
    const result = yield call(fetchStories, query);
    yield put(doAddStories(result.hits));
  } catch (error) {
    yield put(doFetchErrorStories(error));
  }
}

export { handleFetchStories };

//In your handleFetchStories() generator function, that is used in your root saga, you can use the yield statement to write asynchronous code as it would be synchronous code.
//When you finally have the result from the API request, you can use the put() effect to dispatch another action.
