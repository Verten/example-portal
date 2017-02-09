/* eslint-disable import/default */

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'
import './common.scss'

// Needed for React Developer Tools
window.React = React

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router routes={routes} history={history} onUpdate={() => {
      window.scrollTo(0, 0)
    }}/>
  </Provider>,
  document.getElementById('root')
)
