import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";
import { getImage, getUrlApi, getUrlData } from "../service";
import {
  IMAGE_GENERATED_START,
  IMAGE_GENERATED_SUCCESS,
  loadImageSucces,
} from "./actions";

function* onTakeUrlAsync(payload) {
  const description = { prompt: JSON.stringify(payload.payload), steps: 5 };
  const body = {
    method: "POST", // или 'PUT'
    body: JSON.stringify(description),
  };
  const response = yield call(getUrlApi, body);
  if (response.ok) {
    const data = yield call(getUrlData, response);
    const urlDownload = "http://178.124.214.161:7777/download/";
    yield delay(50000);
    const imageResponse = yield call(getImage, `${urlDownload}${data}`);
    yield put(loadImageSucces(imageResponse.url));
  }
  //   const data = response.text();
  //   console.log("Успех:", JSON.stringify(data), data);
}

function* onTakeUrl() {
  yield takeEvery(IMAGE_GENERATED_START, onTakeUrlAsync);
}

export default function* rootSaga() {
  const urlSagas = [fork(onTakeUrl)];
  yield all([...urlSagas]);
}
