import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { observer } from 'mobx-react'

const NAME = 'ContentHeader'

const propTypes = {
  stores: PropTypes.object.isRequired,
  viewTitle: PropTypes.string.isRequired
}

export class ContentHeader extends Component {
  handleClick = (e) => {
    e.preventDefault()
    this.props.stores.ui.toggleSidebarRightOpened()
  }

  render () {
    const {viewTitle} = this.props
    return (
      <header className='page-header'>
        <h2>{viewTitle}</h2>
        <div className='right-wrapper pull-right'>
          <ol className='breadcrumbs'>
            <li>
              <Link to='/home'>
                <i className='fa fa-home'></i>
              </Link>
            </li>
            <li>
              <Link to={'/' + viewTitle.toLowerCase()}>
                <span>{viewTitle}</span>
              </Link>
            </li>
          </ol>
          <a className='sidebar-right-toggle' onClick={this.handleClick}>
            <i className='fa fa-chevron-left'></i>
          </a>
        </div>
      </header>
    )
  }
}
ContentHeader.displayName = NAME
ContentHeader.propTypes = propTypes

export default observer(['stores'], ContentHeader)

