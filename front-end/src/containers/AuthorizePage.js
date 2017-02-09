/**
 * Created by ebinhon on 2/9/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from '../actions'
import { isNull } from 'lodash'
import { debug } from '../utilities/log'
import { removeSession } from '../utilities/auth'

export class AuthorizePage extends React.Component {
  static propTypes = {
    params: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  static defaultProps = {}

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {

  }

  componentDidMount() {
    const { actions } = this.props
    // load auth_session from sessionStorage to get information
    actions.userAuthorize()
  }

  componentWillReceiveProps(nextProps) {
    debug(nextProps)
    const { isAuthenticated, error } = nextProps
    if (!isNull(error)) {
      debug('error')
      removeSession()
      // this.context.router.replace('/sign-in')
    }
    if (isAuthenticated) {
      debug('isAuthenticated -> true')
      // todo: should redirect to the url which user specified
    }
  }

  render() {
    return (
      <div>Authorize</div>
    )
  }
}

function mapStateToProps(state) {
  const { userReducer } = state
  const { isAuthenticated, error } = userReducer.toJS()
  return {
    isAuthenticated,
    error
  }
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions.userAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatch)(AuthorizePage)
