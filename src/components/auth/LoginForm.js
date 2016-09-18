import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import { NOTIFICATION_TYPES } from '../../constants'
const {ERROR} = NOTIFICATION_TYPES

const NAME = 'LoginForm'

const contextTypes = {
  router: PropTypes.object
}

const propTypes = {
  stores: PropTypes.object.isRequired
}

export class LoginForm extends Component {
  username = ''
  password = ''

  changeRouteToHome () {
    this.context.router.push('/home')
  }

  clearInputs () {
    this.username = ''
    this.password = ''
  }

  handleUsernameChange = (e) => {
    this.username = e.target.value
  }

  handlePasswordChange = (e) => {
    this.password = e.target.value
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.stores.authSession.create({
      username: this.username,
      password: this.password
    })
    .then(this.loginSucceeded)
    .catch(this.loginFailed)
  }

  loginAsAdmin = (e) => {
    e.preventDefault()
    this.props.stores.authSession.create({
      username: 'benjamin.webster',
      password: 'Zepko123'
    })
    .then(this.loginSucceeded)
    .catch(this.loginFailed)
  }

  loginAsCurator = (e) => {
    e.preventDefault()
    this.props.stores.authSession.create({
      username: 'andrew.green',
      password: 'Zepko123'
    })
    .then(this.loginSucceeded)
    .catch(this.loginFailed)
  }

  loginAsRegularUser = (e) => {
    e.preventDefault()
    this.props.stores.authSession.create({
      username: 'felipe.apostol',
      password: 'Zepko123'
    })
    .then(this.loginSucceeded)
    .catch(this.loginFailed)
  }

  loginSucceeded = () => {
    this.clearInputs()
    this.changeRouteToHome()
  }

  loginFailed = (error) => {
    this.showNotification(ERROR, error.message)
  }

  showNotification (type, message) {
    this.props.stores.ui.setNotification({
      title: 'Login',
      level: type,
      message
    })
  }

  render () {
    return (
      <div className='panel-body'>
        <div className='row text-center mb-xl'>
          <button onClick={this.loginAsAdmin}>Log in as Admin</button>
          {' '}
          <button onClick={this.loginAsCurator}>Log in as Curator</button>
          {' '}
          <button onClick={this.loginAsRegularUser}>Log in as Regular User</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group mb-lg'>
            <label>Username</label>
            <div className='input-group input-group-icon'>
              <input
                name='username'
                type='text'
                className='form-control input-lg'
                onChange={this.handleUsernameChange}
              />
              <span className='input-group-addon'>
                <span className='icon icon-lg'>
                  <i className='fa fa-user'></i>
                </span>
              </span>
            </div>
          </div>
          <div className='form-group mb-lg'>
            <div className='clearfix'>
              <label className='pull-left'>Password</label>
            </div>
            <div className='input-group input-group-icon'>
              <input
                name='password'
                type='password'
                className='form-control input-lg'
                onChange={this.handlePasswordChange}
              />
              <span className='input-group-addon'>
                <span className='icon icon-lg'>
                  <i className='fa fa-lock'></i>
                </span>
              </span>
            </div>
          </div>

          <div className='row'>
            <div className='text-right'>
              <button type='submit' className='btn btn-primary hidden-xs'>Log In</button>
              <button type='submit' className='btn btn-primary btn-block btn-lg visible-xs mt-lg'>Log In</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
LoginForm.displayName = NAME
LoginForm.propTypes = propTypes
LoginForm.contextTypes = contextTypes

export default observer(['stores'], LoginForm)

