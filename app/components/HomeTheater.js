import React, {PropTypes} from 'react'
import HomeTheaterDvd from './HomeTheaterDvd'

const HomeTheater = ({ homeTheaterDvds, addDvd, searchHomeTheater }) =>{
  let search_node
  return(
    <div>
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
