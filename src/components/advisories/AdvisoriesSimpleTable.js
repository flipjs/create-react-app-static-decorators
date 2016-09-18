import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import AdvisoriesSimpleTableRow from './AdvisoriesSimpleTableRow'

const NAME = 'AdvisoriesSimpleTable'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export class AdvisoriesSimpleTable extends Component {
  render () {
    const {advisories} = this.props.stores
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
            {advisories.records.map(advisory => (
              <AdvisoriesSimpleTableRow key={advisory.id} advisory={advisory} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
AdvisoriesSimpleTable.displayName = NAME
AdvisoriesSimpleTable.propTypes = propTypes

export default observer(['stores'], AdvisoriesSimpleTable)

