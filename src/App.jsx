import { useState } from 'react'
import './App.css'
import { FirstPage } from './FrontEnd/pages/Firstpage'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes} from "react-router-dom";
// import { ButtonArray } from './FrontEnd/components/Button2'
import { ButtonArray } from './FrontEnd/pages/Home'



function App() {

  
  return (
    <div>  
      <Router>
        <ButtonArray/>
      </Router>
    </div>
 
  )
}

export default App;
