import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { rbtUtil } from '../../utils'

const NAME = 'IncidentsTable'

const styles = StyleSheet.create({
  cursor: {
    cursor: 'pointer'
  }
})

const propTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export class IncidentsTable extends Component {
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
      toHmlLabel,
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
          dataField='title'
        >
          Title
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='short_description'
        >
          Description
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='confidence_value'
          dataFormat={toHmlLabel}
          hidden={store.isSelected}
        >
          Confidence
        </TableHeaderColumn>
        <TableHeaderColumn
          dataField='information_source_identity'
          dataFormat={onColumnClick(logRow)}
          columnClassName='tbl-col-link'
          hidden={store.isSelected}
        >
          Information Source
        </TableHeaderColumn>
      </BootstrapTable>
    )
  }
}
IncidentsTable.displayName = NAME
IncidentsTable.propTypes = propTypes

export default withRouter(observer(IncidentsTable))

