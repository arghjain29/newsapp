import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  render() {
    return (

      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route path="/" element={<News key="general" pagesize={3} country="in" category="general" />} />
            <Route path="/business" element={<News key="business" pagesize={3} country="in" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pagesize={3} country="in" category="entertainment" />} />
            <Route path="/health" element={<News key="health" pagesize={3} country="in" category="health" />} />
            <Route path="/science" element={<News key="science" pagesize={3} country="in" category="science" />} />
            <Route path="/sports" element={<News key="sports" pagesize={3} country="in" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pagesize={3} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
