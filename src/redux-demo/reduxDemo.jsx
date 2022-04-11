import React from "react";

// 引入 定义好的 store
import store from "../redux-store";
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
} from "../redux-store/actionCreator";

export default class ReduxDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '测试',
    }

    // 监听变化，更新视图
    // store.subscribe(this.updateList)
  }

  // 更新视图
  updatePage = () => {
    // store.getState() 返回一个对象，将数据保存到 state
    this.setState({
      list: store.getState()?.list
    })
  }
  

  componentDidMount() {
    // 监听订阅，更新视图
    let unsubscribe = store.subscribe(this.updatePage);
    this.setState({
      unsubscribe,
    });
  }

  componentWillUnmount() {
    // 移除订阅
    this.state.unsubscribe();
  }

  // 输入框改变
  inputChange = (e) => {
    const changeAction = changeInputAction(e.target.value);
    store.dispatch(changeAction);
  };

  // 添加到 list
  add = () => {
    const addAction = addItemAction();
    if (store.getState()?.inputVal) {
      store.dispatch(addAction);
    }
  };

  // 删除
  deleteItem = (index) => {
    const deleteAction = deleteItemAction(index);
    store.dispatch(deleteAction);
  };

  render() {
    return (
      <div>
        <div>redux</div>
        <input
          value={store.getState()?.inputVal || ''}
          onChange={this.inputChange}
          type="text"
        />
        <button onClick={this.add}>增加</button>
        <ul>
          {/* 也可直接通过 store.getState() 去使用 */}
          {/* {store.getState()?.list?.map((item, index) => { */}
          {this?.state?.list?.map((item, index) => {
            return (
              <button onClick={()=>{
                this.deleteItem(index)
              }} key={index}>
                {item}
              </button>
            );
          })}
        </ul>
      </div>
    );
  }
}
