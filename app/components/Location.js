import React, { PropTypes } from 'react'

const Location = ({ shelf, row, stack, onDestroy }) => (
  <tr>
    <td>{shelf}</td>
    <td>{row}</td>
    <td>{stack}</td>
    <td>
      <button className='btn btn-danger' onClick={onDestroy}>
        x
      </button>
    </td>
  </tr>
)

Location.propTypes = {
	shelf: PropTypes.string.isRequired,
	row: PropTypes.string.isRequired,
	stack: PropTypes.string.isRequired,
  onDestroy: PropTypes.func.isRequired,
}
export default Location
