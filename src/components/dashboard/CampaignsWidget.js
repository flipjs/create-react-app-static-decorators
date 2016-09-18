import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Panel from '../widgets/Panel'
import PanelHeader from '../widgets/PanelHeader'
import PanelActions from '../widgets/PanelActions'
import PanelAction from '../widgets/PanelAction'
import PanelBody from '../widgets/PanelBody'
import PanelScrollable from '../widgets/PanelScrollable'
import LoadingIndicator from '../widgets/LoadingIndicator'
import CampaignsSimpleTable from '../campaigns/CampaignsSimpleTable'
import { ICONS } from '../../constants'

const NAME = 'CampaignsWidget'

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

export class CampaignsWidget extends Component {
  componentWillMount () {
    this.disposer = this.props.stores.campaigns.invalidateWatcher()
  }

  componentWillUnmount () {
    this.disposer()
  }

  loadData = () => {
    this.props.stores.campaigns.invalidate()
  }

  render () {
    return (
      <Panel id={NAME}>
        <PanelHeader icon={ICONS.campaigns} title='Campaigns' link='/campaigns'>
          <PanelActions>
            <PanelAction icon={ICONS.panel.refresh} onClick={this.loadData} />
          </PanelActions>
        </PanelHeader>
        <PanelBody style={styles.panelBody}>
          <PanelScrollable style={styles.panelScrollable}>
            {this.props.stores.campaigns.isFetching ? (
              <LoadingIndicator center />
            ) : (
              <CampaignsSimpleTable />
            )}
          </PanelScrollable>
        </PanelBody>
      </Panel>
    )
  }
}
CampaignsWidget.displayName = NAME
CampaignsWidget.propTypes = propTypes

export default observer(['stores'], CampaignsWidget)

