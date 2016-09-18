import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import IncidentsSimpleTableRow from './IncidentsSimpleTableRow'

const NAME = 'IncidentsSimpleTable'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export class IncidentsSimpleTable extends Component {
  render () {
    const {incidents} = this.props.stores
    return (
      <div className='table-responsive'>
        <table className='table table-hover mb-none'>
          <thead>
            <tr>
              <th>Time</th>
              <th>Title</th>
              <th>Description</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            {incidents.records.map(incident => (
              <IncidentsSimpleTableRow key={incident.id} incident={incident} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
IncidentsSimpleTable.displayName = NAME
IncidentsSimpleTable.propTypes = propTypes

export default observer(['stores'], IncidentsSimpleTable)

