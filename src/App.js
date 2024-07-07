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
  
  pagesize = 8;
  APIkey = process.env.REACT_APP_NEWS_API;
  state = {
    selectedCountry: '',
    progress: 0
  }

  handleCountryChange = (country) => {
    this.setState({ selectedCountry: country });
    
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      
      <div>
        <Router>
          
          <NavBar onCountryChange={this.handleCountryChange} />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} APIkey={this.APIkey} key="general" pagesize={this.pagesize} country={this.state.selectedCountry} category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} APIkey={this.APIkey} key="business" pagesize={this.pagesize} country={this.state.selectedCountry} category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} APIkey={this.APIkey} key="entertainment" pagesize={this.pagesize} country={this.state.selectedCountry} category="entertainment" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} APIkey={this.APIkey} key="health" pagesize={this.pagesize} country={this.state.selectedCountry} category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} APIkey={this.APIkey} key="science" pagesize={this.pagesize} country={this.state.selectedCountry} category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} APIkey={this.APIkey} key="sports" pagesize={this.pagesize} country={this.state.selectedCountry} category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} APIkey={this.APIkey} key="technology" pagesize={this.pagesize} country={this.state.selectedCountry} category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
