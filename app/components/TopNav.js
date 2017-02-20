import React, { PropTypes } from 'react'

const TopNav = ({ addDvd, openQuickScan }) => (
  <nav id='main-nav' className='navbar navbar-default navbar-fixed-top'>
    <div className='container'>
      <button title='Add DVD' className='btn btn-default navbar-btn navbar-right' onClick={addDvd}>
          <span className='glyphicon glyphicon-cd' aria-hidden='true'></span>
      </button>
      <button title='Quick Scan' className='btn btn-default navbar-btn navbar-right' onClick={openQuickScan}>
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
)

TopNav.propTypes = {
  addDvd: PropTypes.func.isRequired,
  openQuickScan: PropTypes.func.isRequired,
}

export default TopNav
