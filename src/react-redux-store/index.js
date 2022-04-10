import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

// 引入定义的 reducer 纯函数
import { reducer } from './reducer';

// 加入中间件，可打印 store 的更新变化
// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

// 启用 react-redux 浏览器扩展 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;