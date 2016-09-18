import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import Panel from '../widgets/Panel'
import PanelHeader from '../widgets/PanelHeader'
import PanelBody from '../widgets/PanelBody'
import { ICONS } from '../../constants'

const NAME = 'SearchPanel'

const propTypes = {
  router: PropTypes.object.isRequired,
  q: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
}

const defaultProps = {
  theme: ''
}

export class SearchPanel extends Component {
  render () {
    return (
      <Panel id={NAME} theme={this.props.theme}>
        <PanelHeader icon={ICONS.search} title='Search' color='primary' center />
        <PanelBody>
          <div className='text-center'>
            <h3>Query: <strong>{this.props.q || 'none given'}</strong></h3>
          </div>
        </PanelBody>
      </Panel>
    )
  }
}
SearchPanel.displayName = NAME
SearchPanel.propTypes = propTypes
SearchPanel.defaultProps = defaultProps

export default withRouter(observer(SearchPanel))

