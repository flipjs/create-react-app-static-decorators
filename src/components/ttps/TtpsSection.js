import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import TtpsPanel from '../ttps/TtpsPanel'
import SelectedRecord from '../shared/SelectedRecord'

const NAME = 'TtpsSection'

const propTypes = {
  router: PropTypes.object.isRequired,
  actionsDisabled: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  store: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired
}

const defaultProps = {
  actionsDisabled: false,
  title: ''
}

const fullGrid = 'col-md-12 col-lg-12 col-xl-12'
const halfGrid = 'col-md-12 col-lg-6 col-xl-6'
const centerGrid = 'col-lg-offset-3 col-xl-offset-3 col-md-12 col-lg-6 col-xl-6'

export class TtpsSection extends Component {
  showNotification (type, message) {
    this.props.stores.ui.setNotification({
      title: this.props.store.displayName,
      level: type,
      message
    })
  }

  render () {
    const {store} = this.props

    return (
      <div className='row'>
        {((!store.isEmpty) || (store.isEmpty && !store.isSelected)) &&
          <div className={store.isSelected ? halfGrid : fullGrid}>
            <TtpsPanel title={this.props.title} store={store} actionsDisabled={this.props.actionsDisabled} />
          </div>
        }
        {store.isSelected &&
          <div className={store.isEmpty ? centerGrid : halfGrid}>
            <SelectedRecord store={store} actionsDisabled={this.props.actionsDisabled} />
          </div>
        }
      </div>
    )
  }
}
TtpsSection.displayName = NAME
TtpsSection.propTypes = propTypes
TtpsSection.defaultProps = defaultProps

export default withRouter(observer(['stores'], TtpsSection))
