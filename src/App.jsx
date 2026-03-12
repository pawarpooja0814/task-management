import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="app-title">Task Management App</h1>
        <Dashboard />
      </div>
    </>
  )
}

export default App
