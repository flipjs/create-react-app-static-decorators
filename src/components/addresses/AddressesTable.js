import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { rbtUtil } from '../../utils'

const NAME = 'AddressesTable'

const styles = StyleSheet.create({
  cursor: {
    cursor: 'pointer'
  }
})

const propTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export class AddressesTable extends Component {
  handleSelect = (row) => {
    this.selectRecord(row)
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
      toCheckIcon
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
          dataField='id'
          isKey
          hidden
        >
          ID
        </TableHeaderColumn>

        <TableHeaderColumn
          width='120'
          dataField='updated_at'
          dataFormat={dateFromNow}
        >
          Time
        </TableHeaderColumn>

        <TableHeaderColumn
          width='200'
          dataField='address_value'
        >
          Address
        </TableHeaderColumn>

        <TableHeaderColumn
          width='140'
          dataField='category'
        >
          Category
        </TableHeaderColumn>

        <TableHeaderColumn
          width='100'
          dataAlign='center'
          dataField='is_destination'
          dataFormat={toCheckIcon}
          hidden={store.isSelected}
        >
          Is Destination?
        </TableHeaderColumn>

        <TableHeaderColumn
          width='100'
          dataAlign='center'
          dataField='is_source'
          dataFormat={toCheckIcon}
          hidden={store.isSelected}
        >
          Is Source?
        </TableHeaderColumn>

        <TableHeaderColumn
          width='100'
          dataAlign='center'
          dataField='is_spoofed'
          dataFormat={toCheckIcon}
          hidden={store.isSelected}
        >
          Is Spoofed?
        </TableHeaderColumn>
      </BootstrapTable>
    )
  }
}
AddressesTable.displayName = NAME
AddressesTable.propTypes = propTypes

export default withRouter(observer(AddressesTable))

