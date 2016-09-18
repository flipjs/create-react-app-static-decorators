import React, { Component, PropTypes } from 'react'
import { Link, withRouter } from 'react-router'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

const NAME = 'Header'

const propTypes = {
  router: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired
}

export class Header extends Component {
  @observable searchInput

  @action
  handleChange = (e) => {
    this.searchInput = e.target.value
  }

  handleClick = () => {
    this.props.stores.ui.toggleSidebarLeftOpened()
  }

  @action
  handleSubmit = (e) => {
    e.preventDefault()
    const path = this.searchInput && this.searchInput.trim()
      ? '/search?q=' + this.searchInput
      : '/search'
    this.props.router.push(path)
    this.searchInput = ''
  }

  render () {
    const {authSession} = this.props.stores
    return (
      <header className='header'>
        <div className='logo-container'>
          <Link to='/home' className='logo'>
            <img src='assets/images/zepko-header.png' height='54' alt='Zepko' style={{marginTop: -10}} />
          </Link>
          <div
            className='visible-xs toggle-sidebar-left'
            data-toggle-className='sidebar-left-opened'
            data-target='html'
            data-fire-event='sidebar-left-opened'
            onClick={this.handleClick}
          >
            <i className='fa fa-bars' aria-label='Toggle sidebar'></i>
          </div>
        </div>
        <div className='header-right'>
          <form className='search nav-form' onSubmit={this.handleSubmit}>
            <div className='input-group input-search'>
              <input
                type='text'
                className='form-control'
                placeholder='Search...'
                onChange={this.handleChange}
                value={this.searchInput}
              />
              <span className='input-group-btn'>
                <button className='btn btn-default' type='submit'><i className='fa fa-search'></i></button>
              </span>
            </div>
          </form>
          <span className='separator'></span>
          <div id='userbox' className='userbox'>
            <a href='#' data-toggle='dropdown'>
              <figure className='profile-picture'>
                <img
                  src='assets/images/user-default.png'
                  alt='User' className='img-circle'
                  data-lock-picture='assets/images/user-default.png'
                />
              </figure>
              <div className='profile-info' data-lock-name={authSession.username} data-lock-email={authSession.email}>
                <span className='name'>{authSession.fullname}</span>
                <span className='role'>{authSession.group_name}</span>
              </div>
              <i className='fa custom-caret'></i>
            </a>
            <div className='dropdown-menu'>
              <ul className='list-unstyled'>
                <li className='divider'></li>
                <li>
                  <Link role='menuitem' tabIndex='-1' to='/logout'>
                    <i className='fa fa-power-off'></i>
                    {' '}
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
Header.displayName = NAME
Header.propTypes = propTypes

export default withRouter(observer(['stores'], Header))

