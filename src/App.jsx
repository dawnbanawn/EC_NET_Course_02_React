
import Page01 from './page01'
import Page02 from './page02'
import Page03 from './page03'
import Page04 from './page04'
import Page05 from './page05'
import Page06 from './page06'
import Page07 from './page07'
import Page08 from './page08'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './navbar'

import Contact from './Contact'
function App() {

  return (
    <>
            <div className="main">
    
    <Navbar></Navbar>
    </div>
    
      <Routes>
      <Route exact path="/" element={ 
            <div className="main">
            <Page01 />
            <Page02 />
            <Page03 />
            <Page04 />
            <Page05 />
            <Page06 />
            <Page07 />
            <Page08 />
      
          </div>
      } />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      </>

  )
}

export default App
