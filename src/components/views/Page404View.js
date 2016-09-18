import React, { PropTypes } from 'react'
import ContentHeader from '../layouts/ContentHeader'

const NAME = 'Page404View'

const propTypes = {
  stores: PropTypes.object.isRequired
}

export function Page404View () {
  return (
    <section role='main' className='content-body'>
      <ContentHeader viewTitle='404' />
      <section className='body-error error-inside'>
        <div className='center-error'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='main-error mb-xlg'>
                <h2 className='error-code text-dark text-center text-weight-semibold m-none'>
                  404 <i className='fa fa-file'></i>
                </h2>
                <p className='error-explanation text-center'>
                  We're sorry, but the page you were looking for doesn't exist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
Page404View.displayName = NAME
Page404View.propTypes = propTypes

export default Page404View

