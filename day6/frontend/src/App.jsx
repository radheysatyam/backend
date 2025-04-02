import React from 'react'
import Register from './components/Register'
import View from './components/View'

import Delete from './components/Delete'

const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor: 'greenyellow'}}>User Registration System</h1>
      <Register/>
      
      <Delete/>
      <View/>
    </div>
  )
}
export default App