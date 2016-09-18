import React, { Component } from 'react'
import { ICONS } from '../../constants'

const NAME = 'PanelStatus'

export class PanelStatus extends Component {
  render () {
    return (
      <section className='panel'>
        <header className='panel-heading bg-white'>

          <h2 className='panel-title text-primary'>
            <i className={ICONS.incidents}></i>
            {' '}
            Incidents
          </h2>
        </header>
        <div className='panel-body'>
          <div className='table-responsive'>
            <table className='table mb-none'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Risk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  <th>Confidence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Title 1</td>
                  <td>Incident 1 Description</td>
                  <td>
                    <div className='progress progress-sm progress-half-rounded m-none mt-xs light'>
                      <div className='progress-bar progress-bar-danger' role='progressbar'
                        aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: '100%'}}>
                        High
                      </div>
                    </div>
                  </td>
                  <td><div className='label label-success'>High</div></td>
                </tr>
                <tr>
                  <td>Title 2</td>
                  <td>Incident 2 Description</td>
                  <td>
                    <div className='progress progress-sm progress-half-rounded m-none mt-xs light'>
                      <div className='progress-bar progress-bar-success' role='progressbar'
                        aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: '40%'}}>
                        Low
                      </div>
                    </div>
                  </td>
                  <td><div className='label label-danger'>Low</div></td>
                </tr>
                <tr>
                  <td>Title 3</td>
                  <td>Incident 3 Description</td>
                  <td>
                    <div className='progress progress-sm progress-half-rounded m-none mt-xs light'>
                      <div className='progress-bar progress-bar-warning' role='progressbar'
                        aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: '70%'}}>
                        Medium
                      </div>
                    </div>
                  </td>
                  <td><div className='label label-danger'>Low</div></td>
                </tr>
                <tr>
                  <td>Title 4</td>
                  <td>Incident 4 Description</td>
                  <td>
                    <div className='progress progress-sm progress-half-rounded m-none mt-xs light'>
                      <div className='progress-bar progress-bar-danger' role='progressbar'
                        aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: '100%'}}>
                        High
                      </div>
                    </div>
                  </td>
                  <td><div className='label label-warning'>Medium</div></td>
                </tr>
                <tr>
                  <td>Title 5</td>
                  <td>Incident 5 Description</td>
                  <td>
                    <div className='progress progress-sm progress-half-rounded m-none mt-xs light'>
                      <div className='progress-bar progress-bar-success' role='progressbar'
                        aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: '40%'}}>
                        Low
                      </div>
                    </div>
                  </td>
                  <td><div className='label label-success'>High</div></td>
                </tr>
                <tr>
                  <td>Title 6</td>
                  <td>Incident 6 Description</td>
                  <td>
                    <div className='progress progress-sm progress-half-rounded m-none mt-xs light'>
                      <div className='progress-bar progress-bar-success' role='progressbar'
                        aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: '40%'}}>
                        Low
                      </div>
                    </div>
                  </td>
                  <td><div className='label label-warning'>Medium</div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}
PanelStatus.displayName = NAME

export default PanelStatus

