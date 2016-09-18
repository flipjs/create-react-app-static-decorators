import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import LoginForm from '../auth/LoginForm'

const NAME = 'LoginView'

const contextTypes = {
  router: PropTypes.object
}

const propTypes = {
  stores: PropTypes.object.isRequired
}

export class LoginView extends Component {
  componentDidMount () {
    if (this.props.stores.authSession.isAuthenticated) {
      this.context.router.push('/home')
    }
  }

  render () {
    return (
      <section className='body-sign'>
        <div className='center-sign'>
          <a href='http://www.zepko.com' className='logo pull-left mt-sm'>
            <img src='assets/images/zepko-header.png' height='54' alt='Zepko' />
          </a>
          <div className='panel panel-sign'>
            <div className='panel-title-sign mt-xl text-right'>
              <h2 className='title text-uppercase text-weight-bold m-none'>
                <i className='fa fa-globe mr-xs'></i> ZGTIN
              </h2>
            </div>
            {!this.props.stores.authSession.isAuthenticated
              ? <LoginForm />
              : <h5>You are logged in!</h5>
            }
          </div>
          <p className='text-center text-muted mt-md mb-md'>&copy; Copyright 2016. All Rights Reserved.</p>
        </div>
      </section>
    )
  }
}
LoginView.displayName = NAME
LoginView.propTypes = propTypes
LoginView.contextTypes = contextTypes

export default observer(['stores'], LoginView)

