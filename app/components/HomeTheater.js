import React, {PropTypes} from 'react'
import HomeTheaterDvd from './HomeTheaterDvd'
import { importDvdLibrary } from '../hometheaterinfo'
import { openHomeTheater } from '../OpenInBrowser'

const HomeTheater = ({ homeTheaterDvds, addDvd, searchHomeTheater }) =>{
  let search_node
  return(
    <div>
      <div className='well'>
        <div className='row'>
          <div className='col-md-12'>
            <p>
              Quick Scan is powered by <a onClick={openHomeTheater}>Home Theater Info </a>
              and gives you the ability to add your DVDS by simply scanning the barcode.
            </p>
            <button className='btn btn-primary' onClick={importDvdLibrary}>
              Import Home Theater Info
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='row'>&nbsp;</div>
          <div className='col-md-12'>
            <div id='hti-progress'>
              <div id='hti-loading-bar'></div>
            </div>
            <div id='hti-loading-message'></div>
          </div>
        </div>
      </div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!search_node.value.trim()) {
          return
        }
        searchHomeTheater(search_node.value)
      }}>
        <div className='form-group'>
          <input className='form-control' placeholder='Search Home Theater Database' ref={node =>{search_node = node}} />
          <button className="btn btn-default" type="submit">
            <span className='glyphicon glyphicon-search' aria-hidden='true'></span>
          </button>
        </div>
      </form>
      <div className='row'>&nbsp;</div>
      <ul className='list-group'>
      { homeTheaterDvds.map(dvd =>
        <HomeTheaterDvd
          key={dvd._id}
          dvd={dvd}
          addDvd={() => addDvd(dvd)}
        />
        )
      }
      { homeTheaterDvds.length == 0 &&
        <li className='list-group-item' colSpan='5'><strong>No DVDs Found</strong></li>
      }
      </ul>
    </div>
  )
}

export default HomeTheater
