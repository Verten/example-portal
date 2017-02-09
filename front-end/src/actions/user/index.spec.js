import configureMockStore from 'redux-mock-store'
import Immutable from 'immutable'
/* eslint-disable no-unused-vars */
import { USER_REQUEST, USER_AUTHORIZE, USER_AUTHENTICATE } from '../../constants/ActionTypes'
/* eslint-disable no-unused-vars */
import API from '../../api'
/* eslint-disable no-unused-vars */
import * as actions from './index'
import thunk from 'redux-thunk'
import nock from 'nock'
import { expect } from 'chai'

const middlewares = [thunk]
/* eslint-disable no-unused-vars */
const mockStore = configureMockStore(middlewares)
/* eslint-disable no-unused-vars */
const userReducer = Immutable.fromJS({
  isProcessing: false,
  error: null
})

describe('user actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('', () => {

  })

})
