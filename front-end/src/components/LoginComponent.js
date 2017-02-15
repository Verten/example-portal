/**
 * Created by Ardy Chen on 2/6/2017.
 */

import React from 'react'
import { isNull } from 'lodash'
import { debug } from '../utilities/log'

// import './styles/components_1.scss'
import './styles/components.scss'


class LoginComponent extends React.Component {

  static propTypes = {
    userAuthenticate: React.PropTypes.func,
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      identifier: '',
      password: '',
      error: '',
    }
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { error } = nextProps
    if (!isNull(error)) {
      this.handleError(error)
    }
  }

  handleSignIn() {
    debug(`handle click sign in button, identifier: ${this.state.identifier}, password: ${this.state.password}`)
    this.props.userAuthenticate(this.state.identifier, this.state.password)
  }

  handleInput(e) {
    if (e.target.id === 'identifier') {
      this.setState({
        identifier: e.target.value,
      })
    } else if (e.target.id === 'password') {
      this.setState({
        password: e.target.value,
      })
    }
  }

  handleError(error) {
    this.setState({
      error: `${error.message}, ${error.status} ${error.statusText}`,
    })
    // after that clean error information
    setTimeout(() => {
      this.setState({
        error: '',
      })
    }, 3000)
  }

  render() {
    return (
      <div id='iam-login-form-wrapper'>
        <div className='login-logo-wrapper'>
          <div className='login-logo-box'>
            <div className='login-logo'>&nbsp;</div>
          </div>
        </div>
        <div className='login-input-wrapper'>
          <div className='login-input-box'>
            <div className='login-input-username'>
              <label htmlFor='identifier'>Identifier</label>
              <div className=''>
                <input id='identifier' value={this.state.identifier} name='identifier' placeholder='identifier'
                       type='text' onChange={this.handleInput}/>
              </div>
            </div>
            <div className='login-input-password'>
              <label htmlFor='password'>Password</label>
              <div className=''>
                <input id='password' value={this.state.password} name='password' placeholder='password'
                       type='password' onChange={this.handleInput}/>
              </div>
            </div>
            <div className='login-input-button-wrapper'>
              <div className='login-input-button-box'>
                <div className='login-input-button'>
                  <button id='iam-login-button' onClick={this.handleSignIn}>
                    <span>
                      Sign in
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className='login-message-wrapper'>
              <div ref='messageWrapper' className=''>
                {this.state.error}
              </div>
            </div>
          </div>
        </div>
        <div className='login-footer-wrapper'>
          <p>© Ericsson Enterprise AB, 2017. All rights reserved.</p>
        </div>
      </div>
    )
  }
}

export default LoginComponent