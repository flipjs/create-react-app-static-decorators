import React from 'react'

const NAME = 'NoData'

export function NoData () {
  return (
    <div className='text-center'>
      <h3>No Data <i className='fa fa-exclamation-triangle'></i></h3>
      <p className='error-explanation text-center'>
        If this error persists, please contact Zepko Support.
      </p>
    </div>
  )
}
NoData.displayName = NAME

export default NoData
