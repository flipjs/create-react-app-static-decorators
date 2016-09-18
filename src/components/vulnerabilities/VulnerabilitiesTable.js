import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { observer } from 'mobx-react'
import { StyleSheet, css } from 'aphrodite'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { rbtUtil } from '../../utils'

const NAME = 'VulnerabilitiesTable'

const styles = StyleSheet.create({
  cursor: {
    cursor: 'pointer'
  }
})

const propTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export class VulnerabilitiesTable extends Component {
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
      dateFromNow
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
          width='140'
          dataField='cve_id'
        >
          CVE
        </TableHeaderColumn>

        <TableHeaderColumn
          width='260'
          dataField='title'
        >
          Title
        </TableHeaderColumn>

        <TableHeaderColumn
          dataField='short_description'
          hidden={store.isSelected}
        >
          Description
        </TableHeaderColumn>

        <TableHeaderColumn
          width='120'
          dataField='discovered_time'
          dataFormat={dateFromNow}
          hidden={store.isSelected}
        >
          Discovered
        </TableHeaderColumn>

        <TableHeaderColumn
          width='120'
          dataField='published_time'
          dataFormat={dateFromNow}
          hidden={store.isSelected}
        >
          Published
        </TableHeaderColumn>
      </BootstrapTable>
    )
  }
}
VulnerabilitiesTable.displayName = NAME
VulnerabilitiesTable.propTypes = propTypes

export default withRouter(observer(VulnerabilitiesTable))

