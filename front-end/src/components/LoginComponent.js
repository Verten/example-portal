/**
 * Created by Ardy Chen on 2/6/2017.
 */

import React from 'react'
import { debug } from '../utilities/log'

import style from './styles/components_1.scss'
// import style from './styles/components.scss'


class LoginComponent extends React.Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      identifier: '',
      password: '',
    }
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleSignIn() {
    debug(`handle click sign in button, identifier: ${this.state.identifier}, password: ${this.state.password}`)
    this.props.userAuthenticate(this.state.identifier, this.state.password)
  }

  handleInput(e) {
    if (e.target.id === 'identifier') {
      this.setState({
        identifier: e.target.value
      })
    } else if (e.target.id === 'password') {
      this.setState({
        password: e.target.value
      })
    }
  }

  render() {
    return (
      <div id='iam-login-form-wrapper'>
        <div className='login-logo-wrapper'>
          <div className='login-logo-box'>
            <div className='login-logo'></div>
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