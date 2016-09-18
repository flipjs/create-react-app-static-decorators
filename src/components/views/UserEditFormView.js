import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import UserForm from '../users/UserForm'

const NAME = 'UserEditFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function UserEditFormView (props) {
  const {users} = props.stores
  const model = new users.api.Model()
  model.setState(users.selected.toJS())
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Users' />
      <div className='row'>
        <div className='col-lg-offset-2 col-lg-8 col-md-12'>
          <UserForm model={model} />
        </div>
      </div>
    </section>
  )
}
UserEditFormView.displayName = NAME
UserEditFormView.propTypes = propTypes

export default observer(['stores'], UserEditFormView)

