import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import Panel from '../widgets/Panel'
import PanelHeader from '../widgets/PanelHeader'
import PanelActions from '../widgets/PanelActions'
import PanelAction from '../widgets/PanelAction'
import PanelBody from '../widgets/PanelBody'
import InputField from '../widgets/InputField'
import TextAreaField from '../widgets/TextAreaField'
import SelectField from '../widgets/SelectField'
import SubmitButton from '../widgets/SubmitButton'
import { validators as v } from '../../utils'
// TODO: Delete line below when done debugging.
import DebugForm from '../debug/DebugForm'
import { ICONS, NOTIFICATION_TYPES } from '../../constants'
const {ERROR, SUCCESS} = NOTIFICATION_TYPES

const NAME = 'IntendedEffectForm'

const TITLE_WIDTH = 170

// form validators
const defaultValidators = [v.required]
const titleValidators = [v.required, v.minLength(10)]
const shortDescriptionValidators = [v.required, v.minLength(15)]
const descriptionValidators = [v.required, v.minLength(30)]
const namesValidators = [v.required, v.minLength(10)]

const propTypes = {
  model: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
}

const defaultProps = {
  theme: 'default'
}

export class IntendedEffectForm extends Component {
  addNewRecord (record) {
    const {intendedEffects} = this.props.stores
    return intendedEffects.save(record)
  }

  changeRouteToIntendedEffectsView () {
    this.props.router.push('/intendedEffects')
  }

  handleDismiss = () => {
    this.changeRouteToIntendedEffectsView()
  }

  handleSubmit = () => {
    const record = this.props.model
    const promise = record.id
      ? this.updateExistingRecord(record)
      : this.addNewRecord(record)
    promise
      .then(() => {
        const message = 'IntendedEffect has been saved successfully.'
        this.showNotification(SUCCESS, message)
        this.props.stores.summaries.invalidate()
        this.changeRouteToIntendedEffectsView()
      })
      .catch(error => this.showNotification(ERROR, error.message))
  }

  showNotification (type, message) {
    this.props.stores.ui.setNotification({
      title: this.props.stores.intendedEffects.displayName,
      level: type,
      message
    })
  }

  updateExistingRecord (record) {
    const {intendedEffects} = this.props.stores
    const existingRecord = intendedEffects.selected
    return intendedEffects.update(existingRecord, record)
  }

  render () {
    const title = this.props.model.id
      ? 'Edit IntendedEffect'
      : 'New IntendedEffect'

    const {
      confidences,
      intendedEffectStatuses,
      informationSources
    } = this.props.stores

    const {inputs: icons} = ICONS.domains.intendedEffects

    return (
      <Panel id={NAME} theme={this.props.theme}>
        <PanelHeader icon={ICONS.intendedEffects} title={title}>
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
            icon={icons.title}
            name='title'
            title='Title'
            titleWidth={TITLE_WIDTH}
            validators={titleValidators}
            model={this.props.model}
          />
          <InputField
            type='text'
            icon={icons.short_description}
            name='short_description'
            title='Short Description'
            titleWidth={TITLE_WIDTH}
            validators={shortDescriptionValidators}
            model={this.props.model}
          />
          <TextAreaField
            rows={5}
            icon={icons.description}
            name='description'
            title='Long Description'
            titleWidth={TITLE_WIDTH}
            validators={descriptionValidators}
            model={this.props.model}
          />
          <InputField
            type='text'
            icon={icons.title}
            name='names'
            title='Names'
            titleWidth={TITLE_WIDTH}
            validators={namesValidators}
            model={this.props.model}
          />
          <SelectField
            icon={icons.confidence}
            name='confidence_id'
            title='Confidence'
            titleWidth={TITLE_WIDTH}
            validators={defaultValidators}
            model={this.props.model}
            list={confidences.toJS()}
            returnField='id'
            displayField='description'
            placeholder='...'
          />
          <SelectField
            icon={icons.information_source}
            name='information_source_id'
            title='Information Source'
            titleWidth={TITLE_WIDTH}
            validators={defaultValidators}
            model={this.props.model}
            list={informationSources.toJS()}
            returnField='id'
            displayField='identity'
            placeholder='...'
          />
          <SelectField
            icon={icons.status}
            name='status_id'
            title='Status'
            titleWidth={TITLE_WIDTH}
            validators={defaultValidators}
            model={this.props.model}
            list={intendedEffectStatuses.toJS()}
            returnField='id'
            displayField='description'
            placeholder='...'
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
IntendedEffectForm.displayName = NAME
IntendedEffectForm.propTypes = propTypes
IntendedEffectForm.defaultProps = defaultProps

export default withRouter(observer(['stores'], IntendedEffectForm))

