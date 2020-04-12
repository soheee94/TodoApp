// Promise에 기반한 Thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (param) => async (dispatch) => {
    // 요청 시작
    dispatch({ type, param });
    try {
      // 결과물의 이름은 payload로 통일
      const payload = await promiseCreator(param);
      // 성공
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      // 실패
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};

export const handleAsyncActions = (type, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          todos: {
            loading: true,
            data: keepData ? state.todos.data : null,
            error: null,
          },
        };
      case SUCCESS:
        return {
          ...state,
          todos: {
            loading: false,
            data: action.payload,
            error: null,
          },
        };
      case ERROR:
        return {
          ...state,
          todos: {
            loading: false,
            data: null,
            error: action.payload,
          },
        };
      default:
        return state;
    }
  };
};
