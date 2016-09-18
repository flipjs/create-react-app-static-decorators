import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import RecordSection from '../shared/RecordSection'
import IndicatorsSection from '../indicators/IndicatorsSection'
import IntendedEffectsSection from '../intended-effects/IntendedEffectsSection'
import { NOTIFICATION_TYPES } from '../../constants'

import { Indicators, IntendedEffects } from '../../stores/collections'
import { Indicator, IntendedEffect } from '../../stores/models'
import { ApiIndicators, ApiIntendedEffects } from '../../api/models'
import { ui } from '../../stores'

const NAME = 'IndicatorRecordView'

const propTypes = {
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export class IndicatorRecordView extends Component {
  indicators = new Indicators(new ApiIndicators(Indicator, 'indicators'), ui)
  relatedIndicators = new Indicators(new ApiIndicators(Indicator, 'indicators'), ui)
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
    this.indicators = null
    this.relatedIndicators = null
    this.relatedIntendedEffects = null
  }

  fetchData (id) {
    this.indicators.fetchById(id)
      .then(record => {
        this.indicators.setSelected(record)
        this.fetchRelated(record)
      })
      .catch(error => this.redirectToPage404(error))
  }

  fetchRelated (record) {
    this.relatedIndicators.api.setUrl(`indicators/${record.id}/indicators`)
    this.relatedIndicators.clearSelected()
    this.relatedIndicators.fetchAll()
    this.relatedIntendedEffects.api.setUrl(`indicators/${record.id}/intended_effects`)
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
    this.indicators.ui.setNotification({
      title: this.indicators.displayName,
      level: type,
      message
    })
  }

  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='Indicators' />
        <RecordSection store={this.indicators} />
        <IntendedEffectsSection
          store={this.relatedIntendedEffects}
          title='Related Intended Effects'
          actionsDisabled
        />
        <IndicatorsSection
          store={this.relatedIndicators}
          title='Related Indicators'
          actionsDisabled
        />
      </section>
    )
  }
}
IndicatorRecordView.displayName = NAME
IndicatorRecordView.propTypes = propTypes

export default withRouter(observer(IndicatorRecordView))
