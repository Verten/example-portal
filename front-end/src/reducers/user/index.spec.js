import userReducer from './index'
/* eslint-disable no-unused-vars */
import { USER_ERROR, USER_REQUEST, USER_AUTHORIZE, USER_AUTHENTICATE } from '../../constants/ActionTypes'
import { getSession, getUser, getIsAuthenticated } from '../../utilities/auth'
import { expect } from 'chai'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  action: null,
  session: getSession(),
  user: getUser(),
  isAuthenticated: getIsAuthenticated(),
  isProcessing: false,
  error: null
})

describe('user reducer', () => {
  it('should return initial state', () => {
    expect(
      userReducer(undefined, {})
    ).to.deep.equal(initialState)
  })
})
