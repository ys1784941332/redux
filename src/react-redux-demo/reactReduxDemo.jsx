import React from "react";
import { connect } from "react-redux";
import Son from './son';

import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
} from "../react-redux-store/actionCreator";

class ReactReduxDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 输入框改变
  inputChange = (e) => {
    // const changeAction = changeInputAction(e.target.value);
    // store.dispatch(changeAction);

    this.props.customChangeInput(e.target.value);
  };

  // 添加到 list
  add = () => {
    // const addAction = addItemAction();
    // if (store.getState()?.inputVal) {
    //   store.dispatch(addAction);
    // }
    if(this.props.displayInputVal) {
      this.props.customAddItem();
    }
  };

  // 删除
  deleteItem = (index) => {
    // const deleteAction = deleteItemAction(index);
    // store.dispatch(deleteAction);
    console.log("删除了", index, this.props);
    // this.props.customDeleteItem(index)
  };

  render() {
    return (
      <div>
        <div>react-redux</div>
        <input
          value={this.props?.displayInputVal || ''}
          onChange={this.inputChange}
          type="text"
        />
        <button onClick={this.add}>增加</button>
        <ul>
          {this.props?.displayList?.map((item, index) => {
            return (
              <button onClick={this.deleteItem(index)} key={index}>
                <div>{item}</div>
              </button>
            );
          })}
        </ul>

        {/* Son组件 */}
        <Son />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayInputVal: state?.inputVal,
    displayList: state?.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    customChangeInput: (inputVal) => {
      // 调用 dispatch
      dispatch(changeInputAction(inputVal));
    },
    customAddItem: () => {
      // 调用 dispatch
      dispatch(addItemAction());
    },
    customDeleteItem: (deleteIndex) => {
      dispatch(deleteItemAction(deleteIndex));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxDemo);

// todo
// 1、connect传对象和 直接参数区别
// 2、点击增加 却 调了删除方法
