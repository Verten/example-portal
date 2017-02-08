/**
 * Created by Ardy Chen on 2/6/2017.
 */

import React from "react"

class LoginComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="iam-login-form-wrapper">
        <div className="login-logo-wrapper">
          <div className="login-logo-box">
            <div className="login-logo"></div>
          </div>
        </div>

        <div className="login-input-wrapper">
          <div className="login-input-box">
            <div className="login-input-username">
              <label htmlFor="identifier">Identifier</label>
              <div className="">
                <input id="identifier" name="identifier" type="text"/>
              </div>
            </div>
            <div className="login-input-password">
              <label htmlFor="password">Password</label>
              <div className="">
                <input id="password" name="password" type="password"/>
              </div>
            </div>
            <div className="login-input-button-wrapper">
              <div className="login-input-button-box">
                <div className="login-input-button">
                  <button id="iam-login-button">Sign in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginComponent