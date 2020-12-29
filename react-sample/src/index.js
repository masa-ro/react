import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import TodoApp from './containers/TodoApp';
import tasksReducer from "./reducers/tasks";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
// import logger from 'redux-logger';
import logger from './middlewares/Logger';
// import storage from './middlewares/Storage';

// Storeを作成
const store = createStore(
  tasksReducer,
  applyMiddleware(logger)
);

render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Header}/>
      <Route path="/todo" component={TodoApp}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// import Hello from './containers/Hello';
// import helloReducer from './reducers/Hello';

// const store = createStore(helloReducer);

// render(
//   <Provider store={store}>
//     <Hello />
//   </Provider>,
//   document.getElementById('root')  
// )