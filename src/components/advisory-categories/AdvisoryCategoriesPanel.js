import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import Panel from '../widgets/Panel'
import PanelHeader from '../widgets/PanelHeader'
import PanelActions from '../widgets/PanelActions'
import PanelAction from '../widgets/PanelAction'
import PanelBody from '../widgets/PanelBody'
import PanelFooter from '../widgets/PanelFooter'
import Pager from '../widgets/Pager'
import Button from '../widgets/Button'
import LoadingIndicator from '../widgets/LoadingIndicator'
import AdvisoryCategoriesTable from '../advisory-categories/AdvisoryCategoriesTable'
import { ICONS } from '../../constants'
import { secureComponent } from '../../decorators'

const NAME = 'AdvisoryCategoriesPanel'

let SecuredPanelFooter
let SecuredPanelAction

const propTypes = {
  actionsDisabled: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
}

const defaultProps = {
  actionsDisabled: false,
  title: '',
  theme: ''
}

export class AdvisoryCategoriesPanel extends Component {
  constructor (props) {
    super(props)
    const writeAccessRoles = this.props.store.writeAccessRoles
    SecuredPanelFooter = secureComponent(PanelFooter, writeAccessRoles)
    SecuredPanelAction = secureComponent(PanelAction, writeAccessRoles)
  }

  componentWillMount () {
    this.disposer = this.props.store.invalidateWatcher()
  }

  componentWillUnmount () {
    this.disposer()
  }

  loadData = () => {
    this.props.store.invalidate()
  }

  loadFormView = () => {
    this.props.router.push('advisory_categories/new')
  }

  render () {
    const {store} = this.props
    const {buttons} = ICONS.common
    return (
      <Panel id={NAME} theme={this.props.theme}>
        <PanelHeader icon={ICONS.advisoryCategories} title={this.props.title} color='primary' center>
          <PanelActions>
            {!this.props.actionsDisabled &&
              <SecuredPanelAction icon={ICONS.panel.add} onClick={this.loadFormView} />
            }
            <PanelAction icon={ICONS.panel.refresh} onClick={this.loadData} />
          </PanelActions>
        </PanelHeader>
        <PanelBody>
          {store.isFetching ? (
            <LoadingIndicator size={50} center />
          ) : (
            <div>
              <AdvisoryCategoriesTable store={store} />
              <Pager loadData={this.loadData} store={store} />
            </div>
          )}
        </PanelBody>
        {!this.props.actionsDisabled &&
          <SecuredPanelFooter>
            <div>
              <Button icon={buttons.add} theme='default' title='Add' onClick={this.loadFormView} />
            </div>
          </SecuredPanelFooter>
        }
      </Panel>
    )
  }
}
AdvisoryCategoriesPanel.displayName = NAME
AdvisoryCategoriesPanel.propTypes = propTypes
AdvisoryCategoriesPanel.defaultProps = defaultProps

export default withRouter(observer(AdvisoryCategoriesPanel))

