import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import Panel from '../widgets/Panel'
import PanelHeader from '../widgets/PanelHeader'
import PanelActions from '../widgets/PanelActions'
import PanelAction from '../widgets/PanelAction'
import PanelBody from '../widgets/PanelBody'
import PanelFooter from '../widgets/PanelFooter'
import Button from '../widgets/Button'
import Spacer from '../widgets/Spacer'
import RecordInfo from '../shared/RecordInfo'
import { ICONS } from '../../constants'
import { secureComponent } from '../../decorators'

let SecuredPanelAction
let SecuredPanelFooter

const NAME = 'SelectedRecord'

const propTypes = {
  actionsDisabled: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  stores: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
}

const defaultProps = {
  color: 'primary',
  actionsDisabled: false,
  theme: ''
}

export class SelectedRecord extends Component {
  constructor (props) {
    super(props)
    const writeAccessRoles = this.props.store.writeAccessRoles
    SecuredPanelFooter = secureComponent(PanelFooter, writeAccessRoles)
    SecuredPanelAction = secureComponent(PanelAction, writeAccessRoles)
  }

  editSelected = () => {
    this.props.router.push(this.props.store.route + '/edit')
  }

  deleteSelected = () => {
    const {store} = this.props
    const message = `ID:<strong>${store.selected.id}</strong> has been deleted successfully.`
    store.destroy(store.selected)
      .then(() => {
        this.props.stores.ui.setNotification({
          title: store.displayName,
          level: 'success',
          message
        })
        this.hideSelected()
        this.props.stores.summaries.invalidate()
      })
      .catch(() => console.error('ERROR deleting record...'))
  }

  hideSelected = () => {
    const {store, router} = this.props
    if (store.isEmpty) {
      router.goBack()
    } else {
      this.props.store.clearSelected()
    }
  }

  render () {
    const {store} = this.props
    const record = store.selected.toShow()
    const {buttons} = ICONS.common
    const link = '/' + store.route + '/' + store.selected.id
    return (
      <Panel id={NAME} theme={this.props.theme}>
        <PanelHeader link={!store.isEmpty && link} title={store.selected.displayName} color={this.props.color} center>
          <PanelActions>
            {!this.props.actionsDisabled &&
              <SecuredPanelAction icon={ICONS.panel.edit} onClick={this.editSelected} />
            }
            <PanelAction icon={ICONS.panel.dismiss} onClick={this.hideSelected} />
          </PanelActions>
        </PanelHeader>
        <PanelBody>
          <RecordInfo link={link} showLink={!store.isEmpty} record={record} />
        </PanelBody>
        {!this.props.actionsDisabled &&
          <SecuredPanelFooter>
            <div className='text-right'>
              <Button icon={buttons.edit} theme='default' title='Edit' onClick={this.editSelected} />
              <Spacer width={5} />
              <Button icon={buttons.delete} theme='default' title='Delete' onClick={this.deleteSelected} />
            </div>
          </SecuredPanelFooter>
        }
      </Panel>
    )
  }
}
SelectedRecord.displayName = NAME
SelectedRecord.propTypes = propTypes
SelectedRecord.defaultProps = defaultProps

export default withRouter(observer(['stores'], SelectedRecord))

