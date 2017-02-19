import React, { PropTypes } from 'react'
import Alert from './Alert'

const AlertList = ({alerts, dismissAlert}) => (
  <div>
    {alerts.map(alert=>
      <Alert key={alert.id}
        {...alert}
        dismissAlert={() => dismissAlert(alert.id)}
        />
      )
    }
  </div>
)

AlertList.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  dismissAlert: PropTypes.func.isRequired,
}

export default AlertList
