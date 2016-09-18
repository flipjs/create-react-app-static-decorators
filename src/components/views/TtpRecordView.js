import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import RecordSection from '../shared/RecordSection'
import TtpsSection from '../ttps/TtpsSection'
import IncidentsSection from '../incidents/IncidentsSection'
import ExploitTargetsSection from '../exploit-targets/ExploitTargetsSection'
import ThreatActorsSection from '../threat-actors/ThreatActorsSection'
import { NOTIFICATION_TYPES } from '../../constants'

import { Ttps, ThreatActors, ExploitTargets, Incidents } from '../../stores/collections'
import { Ttp, ThreatActor, ExploitTarget, Incident } from '../../stores/models'
import { ApiTtps, ApiThreatActors, ApiExploitTargets, ApiIncidents } from '../../api/models'
import { ui } from '../../stores'

const NAME = 'TtpRecordView'

const propTypes = {
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export class TtpRecordView extends Component {
  ttps = new Ttps(new ApiTtps(Ttp, 'ttps'), ui)
  relatedTtps = new Ttps(new ApiTtps(Ttp, 'ttps'), ui)
  relatedIncidents = new Incidents(new ApiIncidents(Incident, 'incidents'), ui)
  relatedExploitTargets = new ExploitTargets(new ApiExploitTargets(ExploitTarget, 'exploit_targets'), ui)
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
    this.ttps = null
    this.relatedTtps = null
    this.relatedExploitTargets = null
    this.relatedThreatActors = null
  }

  fetchData (id) {
    this.ttps.fetchById(id)
      .then(record => {
        this.ttps.setSelected(record)
        this.fetchRelated(record)
      })
      .catch(error => this.redirectToPage404(error))
  }

  fetchRelated (record) {
    this.relatedTtps.api.setUrl(`ttps/${record.id}/ttps`)
    this.relatedTtps.clearSelected()
    this.relatedTtps.fetchAll()
    this.relatedIncidents.api.setUrl(`ttps/${record.id}/incidents`)
    this.relatedIncidents.clearSelected()
    this.relatedIncidents.fetchAll()
    this.relatedExploitTargets.api.setUrl(`ttps/${record.id}/exploit_targets`)
    this.relatedExploitTargets.clearSelected()
    this.relatedExploitTargets.fetchAll()
    this.relatedThreatActors.api.setUrl(`ttps/${record.id}/threat_actors`)
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
    this.ttps.ui.setNotification({
      title: this.ttps.displayName,
      level: type,
      message
    })
  }

  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='TTPs' />
        <RecordSection store={this.ttps} />
        <ExploitTargetsSection
          store={this.relatedExploitTargets}
          title='Related Exploit Targets'
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
        <TtpsSection
          store={this.relatedTtps}
          title='Related TTPs'
          actionsDisabled
        />
      </section>
    )
  }
}
TtpRecordView.displayName = NAME
TtpRecordView.propTypes = propTypes

export default withRouter(observer(TtpRecordView))
