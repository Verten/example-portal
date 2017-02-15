/*eslint import/no-named-as-default: 0*/
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import NotFoundPage from './containers/NotFoundPage'
import LoginPage from './containers/LoginPage'
import AuthorizePage from './containers/AuthorizePage'
import { requireAuth, requireGuest } from './utilities/auth'

export default (
  <Route>
    <Route path='sign-in' component={LoginPage} onEnter={requireGuest}/>
    <Route path='/' component={App} onEnter={requireAuth}>
      <IndexRoute component={AuthorizePage} />
      <Route path='authorize' component={AuthorizePage}/>
      <Route path='*' component={NotFoundPage}/>
    </Route>
  </Route>
)
