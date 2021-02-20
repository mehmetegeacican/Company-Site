import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore} from 'redux-firestore';
import {getFirebase,ReactReduxFirebaseProvider} from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app';
import { createFirestoreInstance } from 'redux-firestore';


const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
  reduxFirestore(firebase,fbConfig,{attachAuthIsReady: true}),
  )
);

const config = {
  userProfile: 'users', // where profiles are stored in database,
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config,
  dispatch: store.dispatch,
  createFirestoreInstance,
  useFirestoreForProfile: true,
  userProfile: 'users'
};

ReactDOM.render(
  <Provider store = {store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



