import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import RecordSection from '../shared/RecordSection'
import AdvisoriesSection from '../advisories/AdvisoriesSection'
import AdvisoryCategoriesSection from '../advisory-categories/AdvisoryCategoriesSection'
import { NOTIFICATION_TYPES } from '../../constants'

import { Advisories, AdvisoryCategories } from '../../stores/collections'
import { Advisory, AdvisoryCategory } from '../../stores/models'
import { ApiAdvisories, ApiAdvisoryCategories } from '../../api/models'
import { ui } from '../../stores'

const NAME = 'AdvisoryRecordView'

const propTypes = {
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export class AdvisoryRecordView extends Component {
  advisories = new Advisories(new ApiAdvisories(Advisory, 'advisories'), ui)
  relatedAdvisories = new Advisories(new ApiAdvisories(Advisory, 'advisories'), ui)
  relatedAdvisoryCategories = new AdvisoryCategories(
    new ApiAdvisoryCategories(AdvisoryCategory, 'advisory_categories'),
    ui
  )

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
    this.advisories = null
    this.relatedAdvisories = null
    this.relatedAdvisoryCategories = null
  }

  fetchData (id) {
    this.advisories.fetchById(id)
      .then(record => {
        this.advisories.setSelected(record)
        this.fetchRelated(record)
      })
      .catch(error => this.redirectToPage404(error))
  }

  fetchRelated (record) {
    this.relatedAdvisories.api.setUrl(`advisories/${record.id}/advisories`)
    this.relatedAdvisories.clearSelected()
    this.relatedAdvisories.fetchAll()
    this.relatedAdvisoryCategories.api.setUrl(`advisories/${record.id}/advisory_categories`)
    this.relatedAdvisoryCategories.clearSelected()
    this.relatedAdvisoryCategories.fetchAll()
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
    this.advisories.ui.setNotification({
      title: this.advisories.displayName,
      level: type,
      message
    })
  }

  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='Advisories' />
        <RecordSection store={this.advisories} />
        <AdvisoryCategoriesSection
          store={this.relatedAdvisoryCategories}
          title='Categories'
          actionsDisabled
        />
        <AdvisoriesSection
          store={this.relatedAdvisories}
          title='Related Advisories'
          actionsDisabled
        />
      </section>
    )
  }
}
AdvisoryRecordView.displayName = NAME
AdvisoryRecordView.propTypes = propTypes

export default withRouter(observer(AdvisoryRecordView))
