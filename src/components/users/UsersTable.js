import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { rbtUtil } from '../../utils'

const NAME = 'UsersTable'

const styles = StyleSheet.create({
  cursor: {
    cursor: 'pointer'
  }
})

const propTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export class UsersTable extends Component {
  handleSelect = (row) => {
    this.selectRecord(row)
    // this.props.router.push('/intended_effects/' + row.id)
  }

  selectRecord (record) {
    this.props.store.setSelected(record)
  }

  render () {
    const {store} = this.props

    const {
      tableOptions,
      selectRowOptions,
      dateFromNow,
      onColumnClick,
      logRow
    } = rbtUtil

    this.selected = store.isSelected ? [store.selected.id] : []

    return (
      <BootstrapTable
        data={store.records}
        trClassName={css(styles.cursor)}
        bordered={false}
        hover
        selectRow={{
          ...selectRowOptions,
          selected: this.selected,
          onSelect: this.handleSelect
        }}
        options={tableOptions}
      >
        <TableHeaderColumn
          width='80'
          dataField='id'
          isKey
        >
          ID
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField='username'
        >
          Username
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField='fullname'
        >
          Fullname
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField='email'
        >
          Email
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField='group_name'
          dataFormat={onColumnClick(logRow)}
          hidden={store.isSelected}
          columnClassName='tbl-col-link'
        >
          Group
        </TableHeaderColumn>

        <TableHeaderColumn
          width='120'
          dataField='updated_at'
          dataFormat={dateFromNow}
          hidden={store.isSelected}
        >
          Updated At
        </TableHeaderColumn>

      </BootstrapTable>
    )
  }
}
UsersTable.displayName = NAME
UsersTable.propTypes = propTypes

export default withRouter(observer(UsersTable))

