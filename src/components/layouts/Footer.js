import React from 'react'

const NAME = 'Footer'

export function Footer (props) {
  return (
    <div className='container text-center'>
      <h5>ZGTIN</h5>
      <p><small>
        Zepko © {' ' + new Date().getFullYear()}. All Rights Reserved.
      </small></p>
    </div>
  )
}
Footer.displayName = NAME

export default Footer

