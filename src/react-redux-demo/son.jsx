import React from 'react';

import { connect } from 'react-redux';
import {
  deleteItemAction,
} from '../react-redux-store/actionCreator'


class Son extends React.Component {
  // 删除
  deleteItem = (index) => {
    // this.props.customDeleteItem(index)
    console.log(1111, index);
  }
  render() {
    return (
      <div>
        <h3>子组件展示</h3>
        <div>
          {/* <div>{this.props.displayList}</div> */}
          {this.props?.displayList?.map((item, index) => {
            return (
              <button onClick={this.deleteItem(index)} key={index}>
                <div>{item}</div>
                {/* <button >移除</button> */}
              </button>
            );
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    displayList: state?.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    customDeleteItem: (deleteIndex)=> {
      dispatch(deleteItemAction(deleteIndex))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Son)