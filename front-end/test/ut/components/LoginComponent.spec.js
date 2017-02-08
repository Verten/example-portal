/**
 * Created by ebinhon on 2/8/2017.
 */
import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import LoginComponent from '../../../src/components/LoginComponent'

describe('<LoginComponent />', () => {
  it('should render itself', () => {
    const enzymeWrapper = shallow(<LoginComponent />)
    const actual = enzymeWrapper.find('#iam-login-form-wrapper').children()
    expect(actual).to.have.length(2)
  })
})