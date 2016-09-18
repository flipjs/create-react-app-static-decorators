import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import Panel from '../widgets/Panel'
import PanelHeader from '../widgets/PanelHeader'
import PanelActions from '../widgets/PanelActions'
import PanelAction from '../widgets/PanelAction'
import PanelBody from '../widgets/PanelBody'
import InputField from '../widgets/InputField'
import SubmitButton from '../widgets/SubmitButton'
import { validators as v } from '../../utils'
// TODO: Delete line below when done debugging.
import DebugForm from '../debug/DebugForm'
import { ICONS, NOTIFICATION_TYPES } from '../../constants'
const {ERROR, SUCCESS} = NOTIFICATION_TYPES

const NAME = 'UserForm'

const TITLE_WIDTH = 120

// form validators
const usernameValidators = [v.required, v.minLength(8)]
const fullnameValidators = [v.required, v.minLength(8)]
const emailValidators = [v.required, v.email]
const passwordValidators = [v.required, v.minLength(8)]

const propTypes = {
  model: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
}

const defaultProps = {
  theme: 'default'
}

export class UserForm extends Component {
  addNewRecord (record) {
    const {users} = this.props.stores
    return users.save(record)
  }

  changeRouteToUsersView () {
    this.props.router.push('/users')
  }

  handleDismiss = () => {
    this.changeRouteToUsersView()
  }

  handleSubmit = () => {
    const record = this.props.model
    const promise = record.id
      ? this.updateExistingRecord(record)
      : this.addNewRecord(record)
    promise
      .then(() => {
        const message = 'User has been saved successfully.'
        this.showNotification(SUCCESS, message)
        this.props.stores.summaries.invalidate()
        this.changeRouteToUsersView()
      })
      .catch(error => this.showNotification(ERROR, error.message))
  }

  showNotification (type, message) {
    this.props.stores.ui.setNotification({
      title: this.props.stores.users.displayName,
      level: type,
      message
    })
  }

  updateExistingRecord (record) {
    const {users} = this.props.stores
    const existingRecord = users.selected
    return users.update(existingRecord, record)
  }

  render () {
    const title = this.props.model.id
      ? 'Edit User'
      : 'New User'

    const {inputs: icons} = ICONS.domains.users

    return (
      <Panel id={NAME} theme={this.props.theme}>
        <PanelHeader icon={ICONS.users} title={title}>
          <PanelActions>
            <PanelAction
              icon={ICONS.panel.dismiss}
              onClick={this.handleDismiss}
            />
          </PanelActions>
        </PanelHeader>
        <PanelBody>
          <InputField
            type='text'
            icon={icons.username}
            name='username'
            title='Username'
            titleWidth={TITLE_WIDTH}
            validators={usernameValidators}
            model={this.props.model}
          />
          <InputField
            type='text'
            icon={icons.fullname}
            name='fullname'
            title='Fullname'
            titleWidth={TITLE_WIDTH}
            validators={fullnameValidators}
            model={this.props.model}
          />
          <InputField
            type='text'
            icon={icons.email}
            name='email'
            title='Email'
            titleWidth={TITLE_WIDTH}
            validators={emailValidators}
            model={this.props.model}
          />
          <InputField
            type='password'
            icon={icons.password}
            name='password'
            title='Password'
            titleWidth={TITLE_WIDTH}
            validators={passwordValidators}
            model={this.props.model}
          />
          {/* TODO: Delete line below when done debugging. */}
          <DebugForm model={this.props.model} />
          <SubmitButton
            icon={ICONS.common.buttons.submit}
            onClick={this.handleSubmit}
            disabled={!this.props.model.isValid}
          />
        </PanelBody>
      </Panel>
    )
  }
}
UserForm.displayName = NAME
UserForm.propTypes = propTypes
UserForm.defaultProps = defaultProps

export default withRouter(observer(['stores'], UserForm))

