import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import { dateUtil } from '../../utils'

const NAME = 'AdvisoriesSimpleTableRow'

const propTypes = {
  router: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired,
  advisory: PropTypes.object.isRequired
}

export class AdvisoriesSimpleTableRow extends Component {
  showTableRecord = (record) => () => {
    this.props.router.push('/advisories/' + record.id)
  }

  render () {
    const {advisory} = this.props
    return (
      <tr key={advisory.id} onClick={this.showTableRecord(advisory)} className='tbl-col-link'>
        <td>{dateUtil.fromNow(advisory.updated_at)}</td>
        <td>{advisory.title}</td>
        <td>{advisory.short_description}</td>
      </tr>
    )
  }
}
AdvisoriesSimpleTableRow.displayName = NAME
AdvisoriesSimpleTableRow.propTypes = propTypes

export default withRouter(observer(['stores'], AdvisoriesSimpleTableRow))

