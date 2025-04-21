import { put, delay, takeEvery, all } from 'redux-saga/effects';
import { increment, decrement, incrementAsync, decrementAsync } from './counterSlice';

function* incrementAsyncSaga() {
  yield delay(1000);
  yield put(increment());
}

function* decrementAsyncSaga() {
  yield delay(1000);
  yield put(decrement());
}

function* rootSaga() {
  yield all([
    takeEvery(incrementAsync.type, incrementAsyncSaga),
    takeEvery(decrementAsync.type, decrementAsyncSaga),
  ]);
}

export default rootSaga;
