import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import { dateUtil } from '../../utils'

const NAME = 'CampaignsSimpleTableRow'

const propTypes = {
  router: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired,
  campaign: PropTypes.object.isRequired
}

export class CampaignsSimpleTableRow extends Component {
  showTableRecord = (record) => () => {
    this.props.router.push('/campaigns/' + record.id)
  }

  render () {
    const {campaign} = this.props
    return (
      <tr key={campaign.id} onClick={this.showTableRecord(campaign)} className='tbl-col-link'>
        <td>{dateUtil.fromNow(campaign.updated_at)}</td>
        <td>{campaign.title}</td>
        <td>{campaign.short_description}</td>
      </tr>
    )
  }
}
CampaignsSimpleTableRow.displayName = NAME
CampaignsSimpleTableRow.propTypes = propTypes

export default withRouter(observer(['stores'], CampaignsSimpleTableRow))

