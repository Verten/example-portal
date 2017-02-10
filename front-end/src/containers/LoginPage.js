import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { isNull } from 'lodash'
import LoginPanel from '../components/LoginComponent'
import Actions from '../actions'
import { debug } from '../utilities/log'

export class LoginPage extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    debug('LoginPage ', nextProps)
  }

  render() {
    const { actions, error } = this.props
    return (
      <div id="app">
        <LoginPanel {...actions} error={error}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { userReducer } = state
  const { user, isAuthenticated, isProcessing, error } = userReducer.toJS()
  return {
    user, isAuthenticated, isProcessing, error
  }
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions.userAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatch)(LoginPage)
