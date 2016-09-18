import React, { PropTypes } from 'react'
import { observer } from 'mobx-react'
import ContentHeader from '../layouts/ContentHeader'
import UsersSection from '../users/UsersSection'

const NAME = 'UsersView'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function UsersView (props) {
  const {users} = props.stores
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='Users' />
      <UsersSection store={users} title='Users' />
    </section>
  )
}
UsersView.displayName = NAME
UsersView.propTypes = propTypes

export default observer(['stores'], UsersView)
