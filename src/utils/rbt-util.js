import React from 'react'
import * as dateUtil from './date-util'

export const tableOptions = {
  sortIndicator: false
}

export const selectRowOptions = {
  mode: 'radio',
  clickToSelect: true,
  hideSelectColumn: true,
  bgColor: 'rgb(245, 245, 245)'
}

export const pagerOptions = {
  maxButtons: 9,
  pageLimits: [15, 50, 100, 200]
}

export function onColumnClick (callback) {
  return (cell, row) =>
    <div
      title={cell}
      onClick={callback ? () => callback(cell, row) : null}
    >
      {cell}
    </div>
}

export function logRow (cell, row) {
  console.log(row)
}

export function dateFromNow (cell, row) {
  if (!cell) return cell
  return dateUtil.fromNow(cell)
}

export function toHmlLabel (cell) {
  if (!cell || typeof cell !== 'string') return cell
  let text = cell[0].toUpperCase() + cell.slice(1).toLowerCase()
  switch (text) {
    case 'High': return <div className='label label-success'>{text}</div>
    case 'Medium': return <div className='label label-warning'>{text}</div>
    case 'Low': return <div className='label label-danger'>{text}</div>
    default: return <div className='label label-primary'>{text}</div>
  }
}

export function toCheckIcon (cell) {
  return cell
    ? 'Yes'
    : 'No'
  // return cell
  //   ? <i className='fa fa-check-circle'></i>
  //   : <i className='fa fa-times-circle'></i>
}

