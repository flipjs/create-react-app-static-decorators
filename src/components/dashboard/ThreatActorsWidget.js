import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Panel from '../widgets/Panel'
import PanelHeader from '../widgets/PanelHeader'
import PanelActions from '../widgets/PanelActions'
import PanelAction from '../widgets/PanelAction'
import PanelBody from '../widgets/PanelBody'
import PanelScrollable from '../widgets/PanelScrollable'
import LoadingIndicator from '../widgets/LoadingIndicator'
import ThreatActorsSimpleTable from '../threat-actors/ThreatActorsSimpleTable'
import { ICONS } from '../../constants'

const NAME = 'ThreatActorsWidget'

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

export class ThreatActorsWidget extends Component {
  componentWillMount () {
    this.disposer = this.props.stores.threatActors.invalidateWatcher()
  }

  componentWillUnmount () {
    this.disposer()
  }

  loadData = () => {
    this.props.stores.threatActors.invalidate()
  }

  render () {
    return (
      <Panel id={NAME}>
        <PanelHeader icon={ICONS.threatActors} title='Threat Actors' link='/threat_actors'>
          <PanelActions>
            <PanelAction icon={ICONS.panel.refresh} onClick={this.loadData} />
          </PanelActions>
        </PanelHeader>
        <PanelBody style={styles.panelBody}>
          <PanelScrollable style={styles.panelScrollable}>
            {this.props.stores.threatActors.isFetching ? (
              <LoadingIndicator center />
            ) : (
              <ThreatActorsSimpleTable />
            )}
          </PanelScrollable>
        </PanelBody>
      </Panel>
    )
  }
}
ThreatActorsWidget.displayName = NAME
ThreatActorsWidget.propTypes = propTypes

export default observer(['stores'], ThreatActorsWidget)

