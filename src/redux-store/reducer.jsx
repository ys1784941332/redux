import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./actionTypes";

// 纯函数， 根据不同的 action 返回新的 state
export const reducer = (state = { inputVal: 0, list: [] }, action) => {
  if (action.type === CHANGE_INPUT) {
    return {
      ...state,
      inputVal: action.value
    }
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list?.push(newState.inputVal);
    newState.inputVal = ""; // 清空输入框
    return newState;
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
};
