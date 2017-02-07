/**
 * Created by Ardy Chen on 2/6/2017.
 */

import React from "react"

class LoginComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div id="iam-login-form-wrapper">
      <div class="login-logo-wrapper">
        <div class="login-logo-box">
          <div class="login-logo"></div>
        </div>
      </div>

      <div className="login-input-wrapper">
        <div class="login-input-box">
          <div class="login-input-username">
            <label for="identifier">Identifier</label>
            <div class="">
              <input id="identifier" name="identifier" type="text"/>
            </div>
          </div>
          <div class="login-input-password">
            <label for="password">Password</label>
            <div class="">
              <input id="password" name="password" type="password"/>
            </div>
          </div>
          <div class="login-input-button-wrapper">
            <div class="login-input-button-box">
              <div class="login-input-button">
                <button id="iam-login-button">Sign in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default LoginComponent