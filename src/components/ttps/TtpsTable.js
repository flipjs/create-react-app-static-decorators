import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { rbtUtil } from '../../utils'

const NAME = 'TtpsTable'

const styles = StyleSheet.create({
  cursor: {
    cursor: 'pointer'
  }
})

const propTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export class TtpsTable extends Component {
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
          dataField='behaviours'
          hidden={store.isSelected}
        >
          Behaviours
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
TtpsTable.displayName = NAME
TtpsTable.propTypes = propTypes

export default withRouter(observer(TtpsTable))

