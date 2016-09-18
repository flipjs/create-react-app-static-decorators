import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import RecordSection from '../shared/RecordSection'
import IncidentsSection from '../incidents/IncidentsSection'
import TtpsSection from '../ttps/TtpsSection'
import ThreatActorsSection from '../threat-actors/ThreatActorsSection'
import { NOTIFICATION_TYPES } from '../../constants'

import { Incidents, ThreatActors, Ttps } from '../../stores/collections'
import { Incident, ThreatActor, Ttp } from '../../stores/models'
import { ApiIncidents, ApiThreatActors, ApiTtps } from '../../api/models'
import { ui } from '../../stores'

const NAME = 'IncidentRecordView'

const propTypes = {
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export class IncidentRecordView extends Component {
  incidents = new Incidents(new ApiIncidents(Incident, 'incidents'), ui)
  relatedIncidents = new Incidents(new ApiIncidents(Incident, 'incidents'), ui)
  relatedTtps = new Ttps(new ApiTtps(Ttp, 'ttps'), ui)
  relatedThreatActors = new ThreatActors(new ApiThreatActors(ThreatActor, 'threat_actors'), ui)

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
    this.incidents = null
    this.relatedIncidents = null
    this.relatedTtps = null
    this.relatedThreatActors = null
  }

  fetchData (id) {
    this.incidents.fetchById(id)
      .then(record => {
        this.incidents.setSelected(record)
        this.fetchRelated(record)
      })
      .catch(error => this.redirectToPage404(error))
  }

  fetchRelated (record) {
    this.relatedIncidents.api.setUrl(`incidents/${record.id}/incidents`)
    this.relatedIncidents.clearSelected()
    this.relatedIncidents.fetchAll()
    this.relatedTtps.api.setUrl(`incidents/${record.id}/ttps`)
    this.relatedTtps.clearSelected()
    this.relatedTtps.fetchAll()
    this.relatedThreatActors.api.setUrl(`incidents/${record.id}/threat_actors`)
    this.relatedThreatActors.clearSelected()
    this.relatedThreatActors.fetchAll()
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
    this.incidents.ui.setNotification({
      title: this.incidents.displayName,
      level: type,
      message
    })
  }

  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='Incidents' />
        <RecordSection store={this.incidents} />
        <TtpsSection
          store={this.relatedTtps}
          title='Related TTPs'
          actionsDisabled
        />
        <ThreatActorsSection
          store={this.relatedThreatActors}
          title='Related Threat Actors'
          actionsDisabled
        />
        <IncidentsSection
          store={this.relatedIncidents}
          title='Related Incidents'
          actionsDisabled
        />
      </section>
    )
  }
}
IncidentRecordView.displayName = NAME
IncidentRecordView.propTypes = propTypes

export default withRouter(observer(IncidentRecordView))
