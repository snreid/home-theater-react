import { connect } from 'react-redux'
import { addDvd, addLocation } from '../actions'
import TopNav from '../components/TopNav'

const VisibleTopNav = connect()(TopNav)

export default VisibleTopNav
