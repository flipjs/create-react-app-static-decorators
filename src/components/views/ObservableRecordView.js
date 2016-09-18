import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import RecordSection from '../shared/RecordSection'
import ObservablesSection from '../observables/ObservablesSection'
import IntendedEffectsSection from '../intended-effects/IntendedEffectsSection'
import { NOTIFICATION_TYPES } from '../../constants'

import { Observables, IntendedEffects } from '../../stores/collections'
import { Observable, IntendedEffect } from '../../stores/models'
import { ApiObservables, ApiIntendedEffects } from '../../api/models'
import { ui } from '../../stores'

const NAME = 'ObservableRecordView'

const propTypes = {
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export class ObservableRecordView extends Component {
  observables = new Observables(new ApiObservables(Observable, 'observables'), ui)
  relatedObservables = new Observables(new ApiObservables(Observable, 'observables'), ui)
  relatedIntendedEffects = new IntendedEffects(new ApiIntendedEffects(IntendedEffect, 'intended_effects'), ui)

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
    this.observables = null
    this.relatedObservables = null
    this.relatedIntendedEffects = null
  }

  fetchData (id) {
    this.observables.fetchById(id)
      .then(record => {
        this.observables.setSelected(record)
        this.fetchRelated(record)
      })
      .catch(error => this.redirectToPage404(error))
  }

  fetchRelated (record) {
    this.relatedObservables.api.setUrl(`observables/${record.id}/observables`)
    this.relatedObservables.clearSelected()
    this.relatedObservables.fetchAll()
    this.relatedIntendedEffects.api.setUrl(`observables/${record.id}/intended_effects`)
    this.relatedIntendedEffects.clearSelected()
    this.relatedIntendedEffects.fetchAll()
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
    this.observables.ui.setNotification({
      title: this.observables.displayName,
      level: type,
      message
    })
  }

  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='Observables' />
        <RecordSection store={this.observables} />
        <IntendedEffectsSection
          store={this.relatedIntendedEffects}
          title='Related Intended Effects'
          actionsDisabled
        />
        <ObservablesSection
          store={this.relatedObservables}
          title='Related Observables'
          actionsDisabled
        />
      </section>
    )
  }
}
ObservableRecordView.displayName = NAME
ObservableRecordView.propTypes = propTypes

export default withRouter(observer(ObservableRecordView))
