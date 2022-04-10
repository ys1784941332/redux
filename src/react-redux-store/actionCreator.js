// 创建 action 对像
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./actionTypes";

export const changeInputAction = (value)=> {
  return {
    type: CHANGE_INPUT,
    value
  }
}

export const addItemAction = () => {
  return {
    type: ADD_ITEM
  }
}

export const deleteItemAction = (index) => {
  return {
    type: DELETE_ITEM,
    index
  }
}