import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import CampaignsSimpleTableRow from './CampaignsSimpleTableRow'

const NAME = 'CampaignsSimpleTable'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export class CampaignsSimpleTable extends Component {
  render () {
    const {campaigns} = this.props.stores
    return (
      <div className='table-responsive'>
        <table className='table table-hover mb-none'>
          <thead>
            <tr>
              <th>Time</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.records.map(campaign => (
              <CampaignsSimpleTableRow key={campaign.id} campaign={campaign} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
CampaignsSimpleTable.displayName = NAME
CampaignsSimpleTable.propTypes = propTypes

export default observer(['stores'], CampaignsSimpleTable)

