import React from 'react'
import AddLocation from '../containers/AddLocation'
import VisibleLocations from '../containers/VisibleLocations'

const App = () => (
  <div>
    <h2>Locations</h2>
    <AddLocation />
    <VisibleLocations />
  </div>
)

export default App
