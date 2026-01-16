import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aboutus from './Pages/Aboutus'
import Contact from './Pages/Contact'
import Categories from './Pages/categories'
import Ring from './Pages/Ring'
import Necklaces from './Pages/Necklaces'
import Earrings from './Pages/Earring'
import Bracelet from './Pages/Bracelets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  <BrowserRouter>
    
        <Routes>
          <Route path="/" element={   <Home/>} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/ringcategories" element={<Ring/>} />
          <Route path="/necklacescategories" element={<Necklaces/>} />
          <Route path="/earringcategories" element={<Earrings/>} />
          <Route path="/braceletcategories" element={<Bracelet/>} />
        </Routes>
  </BrowserRouter>

  
    </>
  )
}

export default App
