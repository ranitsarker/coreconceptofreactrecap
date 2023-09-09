import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'

function App() {
  return (
    <>
      <h1>React core concepts recap</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load data - side effect</li>
      </ol>
      <hr />
      <Posts></Posts>

    </>
  )
}
export default App
