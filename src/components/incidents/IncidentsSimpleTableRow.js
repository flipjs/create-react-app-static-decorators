import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import { rbtUtil, dateUtil } from '../../utils'

const NAME = 'IncidentsSimpleTableRow'

const propTypes = {
  router: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired,
  incident: PropTypes.object.isRequired
}

export class IncidentsSimpleTableRow extends Component {
  showTableRecord = (record) => () => {
    this.props.router.push('/incidents/' + record.id)
  }

  render () {
    const {incident} = this.props
    return (
      <tr key={incident.id} onClick={this.showTableRecord(incident)} className='tbl-col-link'>
        <td>{dateUtil.fromNow(incident.updated_at)}</td>
        <td>{incident.title}</td>
        <td>{incident.short_description}</td>
        <td>{rbtUtil.toHmlLabel(incident.confidence_value)}</td>
      </tr>
    )
  }
}
IncidentsSimpleTableRow.displayName = NAME
IncidentsSimpleTableRow.propTypes = propTypes

export default withRouter(observer(['stores'], IncidentsSimpleTableRow))

