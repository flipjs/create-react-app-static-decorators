import React, { Component, PropTypes } from 'react'
import { autorun } from 'mobx'
import { observer } from 'mobx-react'
import NotificationSystem from 'react-notification-system'

const NAME = 'Notification'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export class Notification extends Component {
  constructor () {
    super()
    this.notificationSystem = null
  }

  componentDidMount () {
    this.notificationSystem = this.refs.notificationSystem
    this.disposer = autorun(this.showNotification)
  }

  componentWillUnmount () {
    this.disposer()
  }

  clearNotification = () => {
    this.props.stores.ui.clearNotification()
  }

  showNotification = () => {
    const {ui} = this.props.stores
    if (ui.hasNotification) {
      this.notificationSystem
        .addNotification({
          ...ui.notification,
          onAdd: this.clearNotification,
          action: {
            label: ui.notification.level.toUpperCase()
          }
        })
    }
  }

  render () {
    return <NotificationSystem ref='notificationSystem' allowHTML />
  }
}
Notification.displayName = NAME
Notification.propTypes = propTypes

export default observer(['stores'], Notification)

