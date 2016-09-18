import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import SelectedRecord from '../shared/SelectedRecord'

const NAME = 'RecordSection'

const propTypes = {
  store: PropTypes.object.isRequired
}

const fullGrid = 'col-md-12 col-lg-12 col-xl-12'

export class RecordSection extends Component {
  render () {
    return (
      <div className='row'>
        <div className={fullGrid}>
          <SelectedRecord store={this.props.store} theme='primary' color='white' actionsDisabled />
        </div>
      </div>
    )
  }
}
RecordSection.displayName = NAME
RecordSection.propTypes = propTypes

export default observer(RecordSection)

