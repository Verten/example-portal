import configureMockStore from 'redux-mock-store'
import { USER_REQUEST, USER_AUTHORIZE, USER_AUTHENTICATE } from '../../../../src/constants/ActionTypes'
import API from '../../../../src/api'
import * as actions from '../../../../src/actions/user/index'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('user actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should create USER_AUTHENTICATE action when authenticate identifier and password', () => {
    const url = API[USER_AUTHENTICATE]()
    fetchMock.mock('http://localhost:8080/authenticate', {
        status: 200,
        body: {
          responseCode: 200,
          message: 'successfully'
        },
      },
      {
        method: 'POST'
      })
    const expectActions = [
      {
        type: USER_REQUEST
      },
      {
        type: USER_AUTHENTICATE,
        payload: {
          responseCode: 200,
          message: 'successfully'
        }
      }
    ]
    let store = mockStore({})
    return store.dispatch(actions.userAuthenticate('admin', '12345')).then(() => {
      const actualActions = store.getActions()
      expect(actualActions).to.deep.equal(expectActions)
    })
  })

})
