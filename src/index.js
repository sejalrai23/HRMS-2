import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { icons } from './assets/icons'
import StateProvider from './StateProvider';
import { Provider } from 'react-redux'
import store from './store'
import StateReducer, { initialState } from "./Reducer";
React.icons = icons

ReactDOM.render(
  <Provider store={store}>
    <StateProvider initialState={initialState} reducer={StateReducer}>
      <App />
    </StateProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
