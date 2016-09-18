import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'
import { StyleSheet, css } from 'aphrodite'
import { Pagination } from 'react-bootstrap'
import { rbtUtil } from '../../utils'

const styles = StyleSheet.create({
  row: {
    margin: '0 10px'
  },
  selectLimit: {
    display: 'inline-block',
    width: 80,
    marginTop: 20
  }
})

const selectLimit = classNames({
  'form-control': true,
  [css(styles.selectLimit)]: true
})

const row = classNames({
  'row': true,
  [css(styles.row)]: true
})

const NAME = 'Pager'

const propTypes = {
  loadData: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired
}

export class Pager extends Component {
  handleSelect = page => {
    if (this.props.store.api.params.page !== page) {
      this.props.store.api.params.page = page
      this.props.loadData()
    }
  }

  handleChange = e => {
    if (this.props.store.api.params.limit !== e.target.value) {
      this.props.store.api.params.limit = e.target.value
      this.props.loadData()
    }
  }

  render () {
    const {store} = this.props
    return (
      <div className={row}>
        <select
          className={selectLimit}
          value={store.pagination.record_limit}
          onChange={this.handleChange}
        >
        {
          rbtUtil.pagerOptions.pageLimits.map((limit) => (
            <option key={limit} value={limit}>{limit}</option>
          ))
        }
        </select>
        <div className='pull-right'>
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={store.pagination.page_total}
            maxButtons={rbtUtil.pagerOptions.maxButtons}
            activePage={store.pagination.page_current}
            onSelect={this.handleSelect}
          />
        </div>
      </div>
    )
  }
}
Pager.displayName = NAME
Pager.propTypes = propTypes

export default observer(Pager)

