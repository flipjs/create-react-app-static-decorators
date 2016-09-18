import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Panel from '../widgets/Panel'
import PanelHeader from '../widgets/PanelHeader'
import PanelActions from '../widgets/PanelActions'
import PanelAction from '../widgets/PanelAction'
import PanelBody from '../widgets/PanelBody'
import PanelScrollable from '../widgets/PanelScrollable'
import LoadingIndicator from '../widgets/LoadingIndicator'
import IncidentsSimpleTable from '../incidents/IncidentsSimpleTable'
import { ICONS } from '../../constants'

const NAME = 'IncidentsWidget'

const styles = {
  panelBody: {
    minHeight: 276
  },
  panelScrollable: {
    height: {
      height: 200
    },
    marginRight: {
      marginRight: -50
    }
  }
}

const propTypes = {
  stores: PropTypes.object.isRequired
}

export class IncidentsWidget extends Component {
  componentWillMount () {
    this.disposer = this.props.stores.incidents.invalidateWatcher()
  }

  componentWillUnmount () {
    this.disposer()
  }

  loadData = () => {
    this.props.stores.incidents.invalidate()
  }

  render () {
    return (
      <Panel id={NAME}>
        <PanelHeader icon={ICONS.incidents} title='Incidents' link='/incidents'>
          <PanelActions>
            <PanelAction icon={ICONS.panel.refresh} onClick={this.loadData} />
          </PanelActions>
        </PanelHeader>
        <PanelBody style={styles.panelBody}>
          <PanelScrollable style={styles.panelScrollable}>
            {this.props.stores.incidents.isFetching ? (
              <LoadingIndicator center />
            ) : (
              <IncidentsSimpleTable />
            )}
          </PanelScrollable>
        </PanelBody>
      </Panel>
    )
  }
}
IncidentsWidget.displayName = NAME
IncidentsWidget.propTypes = propTypes

export default observer(['stores'], IncidentsWidget)

