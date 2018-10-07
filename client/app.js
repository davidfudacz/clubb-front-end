import React from 'react'

import { Navbar, Sidebar } from './components'
import Routes from './routes'

import { viewWidth } from './styles'

const contentWrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: viewWidth,
}

const App = () => {
  return (
    <div id="main">
      <Navbar />
      <div className="contentWrapper" style={ contentWrapperStyle } >
        <Routes />
        <Sidebar />
      </div>
    </div>
  )
}

export default App
