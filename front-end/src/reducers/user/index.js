/**
 * Created by ebinhon on 1/19/2017.
 */
import Immutable from 'immutable'
import { setSession, getSession, getUser, getIsAuthenticated } from '../../utilities/auth'
import { getImmutableValue } from '../../utilities'

const initialState = Immutable.fromJS({
  data: null,
  session: getSession(),
  user: getUser(),
  isAuthenticated: getIsAuthenticated(),
  isProcessing: false,
  error: null,
})

function userReducer(state = initialState, action) {
  const operation = {
    USER_REQUEST: () => {
      return state.merge({
        isProcessing: true,
      })
    },
    USER_AUTHORIZE: () => {
      let data = getImmutableValue(state, 'action') //state.get('action') ? state.get('action').toJS() : state.get('action')
      data = action.payload
      return state.merge({
        data: Immutable.fromJS(data),
        isProcessing: false,
        error: null,
      })
    },
    USER_AUTHENTICATE: () => {
      let data = getImmutableValue(state, 'action') // state.get('action') ? state.get('action').toJS() : state.get('action')
      data = action.payload
      setSession(action.payload)
      return state.merge({
        data: Immutable.fromJS(data),
        isAuthenticated: true,
        isProcessing: false,
        error: null,
      })
    },
    USER_ERROR: () => {
      let error = getImmutableValue(state, 'error')
      error = action.error
      return state.merge({
        error: Immutable.fromJS(error),
        isProcessing: false,
      })
    },
  }
  if (operation[action.type]) {
    return operation[action.type]()
  }
  return state
}

export default userReducer
