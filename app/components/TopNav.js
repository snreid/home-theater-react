import React, { PropTypes } from 'react'
import QuickScanDvd from '../containers/QuickScanDvd'
import AddDvd from '../containers/AddDvd'

global.jQuery = global.$ = require('jquery')
const bootstrap = require('bootstrap')

const TopNav = ({ addDvd, openQuickScan }) => (
  <div>
    <nav id='main-nav' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <button title='Add DVD'
                className='btn btn-default navbar-btn navbar-right'
                data-toggle='modal'
                data-target='#addDvdModal'>
            <span className='glyphicon glyphicon-cd' aria-hidden='true'></span>
        </button>
        <button title='Quick Scan'
                className='btn btn-default navbar-btn navbar-right'
                data-toggle='modal'
                data-target='#quickScanModal'>
          <span className='glyphicon glyphicon-barcode' aria-hidden='true'></span>
        </button>

        <form className='navbar-form navbar-right' role='search'>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Search'/>
          </div>
          <button className='btn btn-default'>
            <span className='glyphicon glyphicon-search' aria-hidden='true'></span>
          </button>
        </form>
      </div>
    </nav>


    <QuickScanDvd />
    <AddDvd />

  </div>
)

TopNav.propTypes = {
  addDvd: PropTypes.func.isRequired,
  openQuickScan: PropTypes.func.isRequired,
}

export default TopNav
