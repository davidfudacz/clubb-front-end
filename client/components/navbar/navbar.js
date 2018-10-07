import React from 'react'
import { primaryColor, secondaryColor, flexBoxRowSpaceAround, viewWidth } from '../../styles'
import NavbarLink from './navbar-link'

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  height: '50px',
  marginTop: '15px',
  backgroundColor: primaryColor,
  color: secondaryColor,
}

const navWrapperStyle = {
  ...flexBoxRowSpaceAround,
  width: viewWidth,
}

const Navbar = () => (
  <div style={ navStyle }>
    <div className="navWrapper" style={ navWrapperStyle }>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/">Reviews</NavbarLink>
      <NavbarLink to="/">About</NavbarLink>
    </div>
  </div>
)

export default Navbar
