import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import RecordSection from '../shared/RecordSection'
import { NOTIFICATION_TYPES } from '../../constants'

import { Users } from '../../stores/collections'
import { User } from '../../stores/models'
import { ApiUsers } from '../../api/models'
import { ui } from '../../stores'

const NAME = 'UserRecordView'

const propTypes = {
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export class UserRecordView extends Component {
  users = new Users(new ApiUsers(User, 'users'), ui)

  componentWillMount () {
    this.loadSelected(this.props.params.id)
  }

  componentWillReceiveProps (nextProps) {
    this.loadSelected(nextProps.params.id)
  }

  componentWillUnmount () {
    this.cleanUp()
  }

  cleanUp () {
    this.users = null
  }

  fetchData (id) {
    this.users.fetchById(id)
      .then(record => {
        this.users.setSelected(record)
      })
      .catch(error => this.redirectToPage404(error))
  }

  loadSelected (id) {
    if (id) {
      this.fetchData(id)
    }
  }

  redirectToPage404 (error) {
    this.showNotification(NOTIFICATION_TYPES.ERROR, error.message)
    this.props.router.push('/404')
  }

  showNotification (type, message) {
    this.users.ui.setNotification({
      title: this.users.displayName,
      level: type,
      message
    })
  }

  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='Users' />
        <RecordSection store={this.users} />
      </section>
    )
  }
}
UserRecordView.displayName = NAME
UserRecordView.propTypes = propTypes

export default withRouter(observer(UserRecordView))
