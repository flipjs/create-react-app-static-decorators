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

const NAME = 'CoaForm'

const TITLE_WIDTH = 230

// form validators
const defaultValidators = [v.required]
const titleValidators = [v.required, v.minLength(10)]
const shortDescriptionValidators = [v.required, v.minLength(15)]
const descriptionValidators = [v.required, v.minLength(30)]
const objectiveValidators = [v.required, v.minLength(5)]

const propTypes = {
  model: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
}

const defaultProps = {
  theme: 'default'
}

export class CoaForm extends Component {
  addNewRecord (record) {
    const {coas} = this.props.stores
    return coas.save(record)
  }

  changeRouteToCoasView () {
    this.props.router.push('/coas')
  }

  handleDismiss = () => {
    this.changeRouteToCoasView()
  }

  handleSubmit = () => {
    const record = this.props.model
    const promise = record.id
      ? this.updateExistingRecord(record)
      : this.addNewRecord(record)
    promise
      .then(() => {
        const message = 'Coa has been saved successfully.'
        this.showNotification(SUCCESS, message)
        this.props.stores.summaries.invalidate()
        this.changeRouteToCoasView()
      })
      .catch(error => this.showNotification(ERROR, error.message))
  }

  showNotification (type, message) {
    this.props.stores.ui.setNotification({
      title: this.props.stores.coas.displayName,
      level: type,
      message
    })
  }

  updateExistingRecord (record) {
    const {coas} = this.props.stores
    const existingRecord = coas.selected
    return coas.update(existingRecord, record)
  }

  render () {
    const title = this.props.model.id
      ? 'Edit COA'
      : 'New COA'

    const {
      coaImpacts,
      coaCosts,
      coaEfficacies,
      coaStages,
      coaTypes,
      informationSources
    } = this.props.stores

    const {inputs: icons} = ICONS.domains.coas

    return (
      <Panel id={NAME} theme={this.props.theme}>
        <PanelHeader icon={ICONS.coas} title={title}>
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
            icon={icons.objective}
            name='objective'
            title='Objective'
            titleWidth={TITLE_WIDTH}
            validators={objectiveValidators}
            model={this.props.model}
          />
          <SelectField
            icon={icons.stage}
            name='stage_id'
            title='Stage'
            titleWidth={TITLE_WIDTH}
            validators={defaultValidators}
            model={this.props.model}
            list={coaStages.toJS()}
            returnField='id'
            displayField='value'
            placeholder='...'
          />
          <SelectField
            icon={icons.type}
            name='type_id'
            title='Type'
            titleWidth={TITLE_WIDTH}
            validators={defaultValidators}
            model={this.props.model}
            list={coaTypes.toJS()}
            returnField='id'
            displayField='value'
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
            icon={icons.impact}
            name='impact_id'
            title='Impact'
            titleWidth={TITLE_WIDTH}
            validators={defaultValidators}
            model={this.props.model}
            list={coaImpacts.toJS()}
            returnField='id'
            displayField='description'
            placeholder='...'
          />
          <SelectField
            icon={icons.cost}
            name='cost_id'
            title='Cost'
            titleWidth={TITLE_WIDTH}
            validators={defaultValidators}
            model={this.props.model}
            list={coaCosts.toJS()}
            returnField='id'
            displayField='description'
            placeholder='...'
          />
          <SelectField
            icon={icons.efficacy}
            name='efficacy_id'
            title='Efficacy'
            titleWidth={TITLE_WIDTH}
            validators={defaultValidators}
            model={this.props.model}
            list={coaEfficacies.toJS()}
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
CoaForm.displayName = NAME
CoaForm.propTypes = propTypes
CoaForm.defaultProps = defaultProps

export default withRouter(observer(['stores'], CoaForm))

