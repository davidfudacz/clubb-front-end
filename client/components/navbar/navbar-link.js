import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  flexBoxJustifiedAndAlignedCenter,
  secondaryColor
} from '../../styles'

const navbarLinkStyle = {
  ...flexBoxJustifiedAndAlignedCenter,
  textDecoration: 'none',
  width: '150px',
  color: secondaryColor,
}

const NavbarLink = ({ to, children }) => {
  return (
    <Link to={ to } style={ navbarLinkStyle }>
      {
        children
      }
    </Link>
  )
}

export default NavbarLink

NavbarLink.propTypes = {
  to: PropTypes.string.isRequired,
}