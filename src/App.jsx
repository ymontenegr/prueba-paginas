import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import BlogPage from './Pages/BlogPage'

function App() {
  const [count, setCount] = useState(0)

  return (

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/" element={<BlogPage />}></Route>
        </Routes>

    
  )
}

export default App
