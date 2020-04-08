import { call, put } from "redux-saga/effects";

export const createPromiseSaga = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return function*(action) {
    try {
      const payload = yield call(promiseCreator, action.payload);
      yield put({
        type: SUCCESS,
        payload
      });
    } catch (e) {
      yield put({
        type: ERROR,
        payload: e,
        error: true
      });
    }
  };
};

export const handleAsyncActions = (type, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          loading: true,
          data: keepData ? state.data : null,
          error: null
        };
      case SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: null
        };
      case ERROR:
        return {
          loading: false,
          data: null,
          error: action.payload
        };
      default:
        return state;
    }
  };
};
