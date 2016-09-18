import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { rbtUtil } from '../../utils'

const NAME = 'ObservablesTable'

const styles = StyleSheet.create({
  cursor: {
    cursor: 'pointer'
  }
})

const propTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export class ObservablesTable extends Component {
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
          width='120'
          dataField='updated_at'
          dataFormat={dateFromNow}
        >
          Time
        </TableHeaderColumn>

        <TableHeaderColumn
          width='200'
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
          width='100'
          dataField='status'
          hidden={store.isSelected}
        >
          Status
        </TableHeaderColumn>

        <TableHeaderColumn
          width='160'
          dataAlign='center'
          dataField='confidence_value'
          dataFormat={toHmlLabel}
          hidden={store.isSelected}
        >
          Confidence
        </TableHeaderColumn>

        <TableHeaderColumn
          width='220'
          dataField='information_source_identity'
          dataFormat={onColumnClick(logRow)}
          hidden={store.isSelected}
          columnClassName='tbl-col-link'
        >
          Information Source
        </TableHeaderColumn>
      </BootstrapTable>
    )
  }
}
ObservablesTable.displayName = NAME
ObservablesTable.propTypes = propTypes

export default withRouter(observer(ObservablesTable))

