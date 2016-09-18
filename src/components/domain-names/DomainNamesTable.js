import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { rbtUtil } from '../../utils'

const NAME = 'DomainNamesTable'

const styles = StyleSheet.create({
  cursor: {
    cursor: 'pointer'
  }
})

const propTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export class DomainNamesTable extends Component {
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
          dataField='id'
          isKey
          hidden
        >
          ID
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='updated_at'
          dataFormat={dateFromNow}
        >
          Time
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='value'
        >
          Domain Name
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='type'
          dataFormat={onColumnClick(logRow)}
        >
          Type
        </TableHeaderColumn>
      </BootstrapTable>
    )
  }
}
DomainNamesTable.displayName = NAME
DomainNamesTable.propTypes = propTypes

export default withRouter(observer(DomainNamesTable))

