import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import RecordSection from '../shared/RecordSection'
import CoasSection from '../coas/CoasSection'
import ExploitTargetsSection from '../exploit-targets/ExploitTargetsSection'
import { NOTIFICATION_TYPES } from '../../constants'

import { Coas, ExploitTargets } from '../../stores/collections'
import { Coa, ExploitTarget } from '../../stores/models'
import { ApiCoas, ApiExploitTargets } from '../../api/models'
import { ui } from '../../stores'

const NAME = 'CoaRecordView'

const propTypes = {
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export class CoaRecordView extends Component {
  coas = new Coas(new ApiCoas(Coa, 'coas'), ui)
  relatedCoas = new Coas(new ApiCoas(Coa, 'coas'), ui)
  relatedExploitTargets = new ExploitTargets(new ApiExploitTargets(ExploitTarget, 'exploit_targets'), ui)

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
    this.coas = null
    this.relatedCoas = null
    this.relatedExploitTargets = null
  }

  fetchData (id) {
    this.coas.fetchById(id)
      .then(record => {
        this.coas.setSelected(record)
        this.fetchRelated(record)
      })
      .catch(error => this.redirectToPage404(error))
  }

  fetchRelated (record) {
    this.relatedCoas.api.setUrl(`coas/${record.id}/coas`)
    this.relatedCoas.clearSelected()
    this.relatedCoas.fetchAll()
    this.relatedExploitTargets.api.setUrl(`coas/${record.id}/exploit_targets`)
    this.relatedExploitTargets.clearSelected()
    this.relatedExploitTargets.fetchAll()
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
    this.coas.ui.setNotification({
      title: this.coas.displayName,
      level: type,
      message
    })
  }

  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='COAs' />
        <RecordSection store={this.coas} />
        <ExploitTargetsSection
          store={this.relatedExploitTargets}
          title='Related Exploit Targets'
          actionsDisabled
        />
        <CoasSection
          store={this.relatedCoas}
          title='Related COAs'
          actionsDisabled
        />
      </section>
    )
  }
}
CoaRecordView.displayName = NAME
CoaRecordView.propTypes = propTypes

export default withRouter(observer(CoaRecordView))
