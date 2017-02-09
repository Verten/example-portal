/**
 * Created by ebinhon on 1/19/2017.
 */
import Immutable from 'immutable'
import { getSession, getUser, getIsAuthenticated } from '../../utilities/auth'

const initialState = Immutable.fromJS({
  action: null,
  session: getSession(),
  user: getUser(),
  isAuthenticated: getIsAuthenticated(),
  isProcessing: false,
  error: null
})

function userReducer(state = initialState, action) {
  const operation = {
    USER_REQUEST: () => {
      return state.merge({
        isProcessing: true,
      })
    },
    USER_AUTHORIZE: () => {
      let action = state.get('action') ? state.get('action').toJS() : state.get('action')
      action = action.payload
      return state.merge({
        action: Immutable.fromJS(action),
        isProcessing: false,
        error: null
      })
    },
    USER_AUTHENTICATE: () => {
      let action = state.get('action') ? state.get('action').toJS() : state.get('action')
      action = action.payload
      return state.merge({
        action: Immutable.fromJS(action),
        isProcessing: false,
        error: null
      })
    },
    USER_ERROR: () => {
      let error = state.get('error') ? state.get('error').toJS() : state.get('error')
      error = action.error
      return state.merge({
        error: Immutable.fromJS(error),
        isProcessing: false,
      })
    }
  }
  if (operation[action.type]) {
    return operation[action.type]()
  }
  return state
}

export default userReducer
