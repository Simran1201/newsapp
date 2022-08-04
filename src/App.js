import './App.css';
import React, { useState } from 'react'
import Nav from './components/Nav';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  // apiKey = process.env.REACT_APP_NEWS_API
  const apiKey = "806136b2d13a46a89a3ebdfa0a2774d4";
  const pageNum = 6;
  const countryName = "in";
  const [progress, setProgress] = useState(0);
    return (
      <div>
      <Router>
         <Nav />
         <LoadingBar
         height={3}
        color='#f11946'
        progress={progress}/>
          {/* <News setProgress={setProgress} pageSize={pageNum} apiKey={apiKey} country={countryName} category="general"/> */}
          <Routes>
            <Route exact path="/"  element={<News setProgress={setProgress} pageSize={pageNum} apiKey={apiKey} country={countryName} category="general" key="general"/>}></Route>
            <Route exact path="/bussiness" element={<News setProgress={setProgress} pageSize={pageNum} apiKey={apiKey} country={countryName} category="business" key="business"/>}></Route>
            <Route exact path="/entertaiment" element={<News setProgress={setProgress} pageSize={pageNum} apiKey={apiKey} country={countryName} category="entertainment" key="entertaiment"/>}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress} pageSize={pageNum} apiKey={apiKey} country={countryName} category="general" key="general"/>}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} pageSize={pageNum} apiKey={apiKey} country={countryName} category="health" key="health"/>}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} pageSize={pageNum} apiKey={apiKey} country={countryName} category="science" key="science"/>}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} pageSize={pageNum} apiKey={apiKey} country={countryName} category="sports" key="sports"/>}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} pageSize={pageNum} apiKey={apiKey} country={countryName} category="technology" key="technology"/>}></Route>
          </Routes>
      </Router>
      </div>
    )
}
export default App