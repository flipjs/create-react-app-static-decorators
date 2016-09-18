import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import { dateUtil } from '../../utils'

const NAME = 'ThreatActorsSimpleTableRow'

const propTypes = {
  router: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired,
  threatActor: PropTypes.object.isRequired
}

export class ThreatActorsSimpleTableRow extends Component {
  showTableRecord = (record) => () => {
    this.props.router.push('/threat_actors/' + record.id)
  }

  render () {
    const {threatActor} = this.props
    return (
      <tr key={threatActor.id} onClick={this.showTableRecord(threatActor)} className='tbl-col-link'>
        <td>{dateUtil.fromNow(threatActor.updated_at)}</td>
        <td>{threatActor.title}</td>
        <td>{threatActor.short_description}</td>
      </tr>
    )
  }
}
ThreatActorsSimpleTableRow.displayName = NAME
ThreatActorsSimpleTableRow.propTypes = propTypes

export default withRouter(observer(['stores'], ThreatActorsSimpleTableRow))

