import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import RecordSection from '../shared/RecordSection'
import { NOTIFICATION_TYPES } from '../../constants'

import { AdvisoryCategories } from '../../stores/collections'
import { AdvisoryCategory } from '../../stores/models'
import { ApiAdvisoryCategories } from '../../api/models'
import { ui } from '../../stores'

const NAME = 'AdvisoryCategoryRecordView'

const propTypes = {
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

export class AdvisoryCategoryRecordView extends Component {
  advisoryCategories = new AdvisoryCategories(new ApiAdvisoryCategories(AdvisoryCategory, 'advisory_categories'), ui)

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
    this.advisoryCategories = null
  }

  fetchData (id) {
    this.advisoryCategories.fetchById(id)
      .then(record => {
        this.advisoryCategories.setSelected(record)
      })
      .catch(error => this.redirectToPage404(error))
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
    this.advisoryCategories.ui.setNotification({
      title: this.advisoryCategories.displayName,
      level: type,
      message
    })
  }

  render () {
    return (
      <section role='main' className='content-body'>
        <ContentHeader viewTitle='Advisory Categories' />
        <RecordSection store={this.advisoryCategories} />
      </section>
    )
  }
}
AdvisoryCategoryRecordView.displayName = NAME
AdvisoryCategoryRecordView.propTypes = propTypes

export default withRouter(observer(AdvisoryCategoryRecordView))
