import React from 'react'
import {BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import DocumentHOC from './common/DocumentHOC'
import Home from './containers/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Education from './Components/Education'
import './sass/main.scss'
import TravelContainer from './containers/TravelContainer'

import CreateBlog from './Components/createBlog'

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar navbarColor="#000" /> */}
        <Routes>
          <Route path="/" exact element = {<Home/>} />
          <Route path="/about" element = {<About/>} />
          <Route path="/create-blog" element = {<CreateBlog/>} />
          <Route path="/education" element = {<Education/>} />
          <Route path="/travel" element = {<TravelContainer/>} />
          <Route path="/:type/:slug"  element = {<DocumentHOC/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
