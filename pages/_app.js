import '../styles/globals.css';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import withRedux from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index';

const MyApp = ({ Component, pageProps, store }) => {
  // return (
  //   <Provider store={store}>
  //     <Component {...pageProps} />
  //   </Provider>
  // );

  return <Component {...pageProps} />;
};

const configureStore = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  // const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  return store;
};

export default withRedux(configureStore)(MyApp);
// export default MyApp;
