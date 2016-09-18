import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import ThreatActorsSimpleTableRow from './ThreatActorsSimpleTableRow'

const NAME = 'ThreatActorsSimpleTable'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export class ThreatActorsSimpleTable extends Component {
  render () {
    const {threatActors} = this.props.stores
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
            {threatActors.records.map(threatActor => (
              <ThreatActorsSimpleTableRow key={threatActor.id} threatActor={threatActor} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
ThreatActorsSimpleTable.displayName = NAME
ThreatActorsSimpleTable.propTypes = propTypes

export default observer(['stores'], ThreatActorsSimpleTable)

