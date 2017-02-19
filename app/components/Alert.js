import React, { PropTypes } from 'react'

const Alert = ({ message, level, dismissAlert}) => (
  <div className={`alert alert-${level}`} role='alert'>
    <button type='button' className='close' aria-label='close' onClick={dismissAlert}>
      <span aria-hidden='true'>&times;</span>
    </button>
    {message}
  </div>
)

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  dismissAlert: PropTypes.func.isRequired,
}

export default Alert
