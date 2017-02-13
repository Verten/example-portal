import userReducer from '../../../src/reducers/user/index'
/* eslint-disable no-unused-vars */
import { USER_ERROR, USER_REQUEST, USER_AUTHORIZE, USER_AUTHENTICATE } from '../../../src/constants/ActionTypes'
import { getSession, getUser, getIsAuthenticated } from '../../../src/utilities/auth'
import { expect } from 'chai'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  data: null,
  session: getSession(),
  user: getUser(),
  isAuthenticated: getIsAuthenticated(),
  isProcessing: false,
  error: null
})

describe('User Reducer', () => {
  it('should return initial state', () => {
    expect(
      userReducer(undefined, {})
    ).to.deep.equal(initialState)
  })
  it('should handle USER_REQUEST', () => {
    const expectState = Immutable.fromJS({
      data: null,
      session: getSession(),
      user: getUser(),
      isAuthenticated: getIsAuthenticated(),
      isProcessing: true,
      error: null
    })
    expect(
      userReducer(undefined, {
        type: USER_REQUEST
      })
    ).to.deep.equal(expectState)
  })
  it('should handle USER_AUTHENTICATE', () => {
    const expectState = Immutable.fromJS({
      data: Immutable.fromJS({
        sessionID: 'test'
      }),
      session: Immutable.fromJS({
        sessionID: 'test'
      }),
      user: getUser(),
      isAuthenticated: true,
      isProcessing: false,
      error: null
    })
    expect(userReducer(undefined, {
      type: USER_AUTHENTICATE,
      payload: {
        sessionID: 'test'
      }
    })).to.deep.equal(expectState)
  })
})
