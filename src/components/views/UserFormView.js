import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import UserForm from '../users/UserForm'

const NAME = 'UserFormView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function UserFormView (props) {
  const model = new props.stores.users.api.Model()
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
UserFormView.displayName = NAME
UserFormView.propTypes = propTypes

export default observer(['stores'], UserFormView)

