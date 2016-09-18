import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Panel from '../widgets/Panel'
import PanelHeader from '../widgets/PanelHeader'
import PanelActions from '../widgets/PanelActions'
import PanelAction from '../widgets/PanelAction'
import PanelBody from '../widgets/PanelBody'
import PanelScrollable from '../widgets/PanelScrollable'
import LoadingIndicator from '../widgets/LoadingIndicator'
import AdvisoriesSimpleTable from '../advisories/AdvisoriesSimpleTable'
import { ICONS } from '../../constants'

const NAME = 'AdvisoriesWidget'

const styles = {
  panelBody: {
    minHeight: 265
  },
  panelScrollable: {
    height: {
      height: 360
    },
    marginRight: {
      marginRight: -50
    }
  }
}

const propTypes = {
  stores: PropTypes.object.isRequired
}

export class AdvisoriesWidget extends Component {
  componentWillMount () {
    this.disposer = this.props.stores.advisories.invalidateWatcher()
  }

  componentWillUnmount () {
    this.disposer()
  }

  loadData = () => {
    this.props.stores.advisories.invalidate()
  }

  render () {
    return (
      <Panel id={NAME}>
        <PanelHeader icon={ICONS.advisories} title='Advisories' link='/advisories'>
          <PanelActions>
            <PanelAction icon={ICONS.panel.refresh} onClick={this.loadData} />
          </PanelActions>
        </PanelHeader>
        <PanelBody style={styles.panelBody}>
          <PanelScrollable style={styles.panelScrollable}>
            {this.props.stores.advisories.isFetching ? (
              <LoadingIndicator center />
            ) : (
              <AdvisoriesSimpleTable />
            )}
          </PanelScrollable>
        </PanelBody>
      </Panel>
    )
  }
}
AdvisoriesWidget.displayName = NAME
AdvisoriesWidget.propTypes = propTypes

export default observer(['stores'], AdvisoriesWidget)

