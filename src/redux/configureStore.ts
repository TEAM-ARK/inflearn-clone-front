// import { setAutoFreeze } from 'immer';
import { Context, createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { Task } from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';

interface SagaStore extends Store {
  sagaTask?: Task;
}

const configureStore = (context: Context) => {
  // setAutoFreeze(false);
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(reducer, enhancer);

  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper<Store>(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
