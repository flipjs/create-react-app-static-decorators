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

const NAME = 'DomainNameForm'

const TITLE_WIDTH = 170

// form validators
const defaultValidators = [v.required]

const propTypes = {
  model: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
}

const defaultProps = {
  theme: 'default'
}

export class DomainNameForm extends Component {
  addNewRecord (record) {
    const {domainNames} = this.props.stores
    return domainNames.save(record)
  }

  changeRouteToDomainNamesView () {
    this.props.router.push('/domain_names')
  }

  handleDismiss = () => {
    this.changeRouteToDomainNamesView()
  }

  handleSubmit = () => {
    const record = this.props.model
    const promise = record.id
      ? this.updateExistingRecord(record)
      : this.addNewRecord(record)
    promise
      .then(() => {
        const message = 'Domain Name has been saved successfully.'
        this.showNotification(SUCCESS, message)
        this.props.stores.summaries.invalidate()
        this.changeRouteToDomainNamesView()
      })
      .catch(error => this.showNotification(ERROR, error.message))
  }

  showNotification (type, message) {
    this.props.stores.ui.setNotification({
      title: this.props.stores.domainNames.displayName,
      level: type,
      message
    })
  }

  updateExistingRecord (record) {
    const {domainNames} = this.props.stores
    const existingRecord = domainNames.selected
    return domainNames.update(existingRecord, record)
  }

  render () {
    const title = this.props.model.id
      ? 'Edit Domain Name'
      : 'New Domain Name'

    const {inputs: icons} = ICONS.domains.domainNames

    return (
      <Panel id={NAME} theme={this.props.theme}>
        <PanelHeader icon={ICONS.domainNames} title={title}>
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
            icon={icons.value}
            name='value'
            title='Value'
            titleWidth={TITLE_WIDTH}
            validators={defaultValidators}
            model={this.props.model}
          />
          <InputField
            type='text'
            icon={icons.type}
            name='type'
            title='Type'
            titleWidth={TITLE_WIDTH}
            validators={defaultValidators}
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
DomainNameForm.displayName = NAME
DomainNameForm.propTypes = propTypes
DomainNameForm.defaultProps = defaultProps

export default withRouter(observer(['stores'], DomainNameForm))

