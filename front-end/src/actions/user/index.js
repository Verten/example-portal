/**
 * Created by ebinhon on 2/9/2017.
 */
import API from '../../api'
import * as Utilities from '../../utilities'
import { USER_ERROR, USER_REQUEST, USER_AUTHORIZE, USER_AUTHENTICATE } from '../../constants/ActionTypes'

// default error action
function _error() {
  return error => ({
    type: USER_ERROR,
    error
  })
}

// default request action
function userRequest() {
  return {
    type: USER_REQUEST
  }
}

function _userAuthorize() {
  return payload => ({
    type: USER_AUTHORIZE,
    payload
  })
}

function _userAuthenticate() {
  return payload => ({
    type: USER_AUTHENTICATE,
    payload
  })
}

export function userAuthorize() {
  const url = API[USER_AUTHORIZE]()
  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer `,
    },
  }
  return (dispatch) => {
    return dispatch(Utilities.callAPI(url, config, userRequest(), _userAuthorize(), _error()))
  }
}

export function userAuthenticate(username, password) {
  const url = API[USER_AUTHENTICATE]()
  const config = {
    mode: 'cors',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${username}.${password}`,
    },
  }
  return (dispatch) => {
    return dispatch(Utilities.callAPI(url, config, userRequest(), _userAuthenticate(), _error()))
  }
}
