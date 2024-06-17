import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        
        <div className="row my-4">
            <div className="col-md-4">
                <NewsItem title="myTitle" description="mydescp" />
            </div>
            <div className="col-md-4">
                <NewsItem title="myTitle" description="mydescp" />
            </div>
            <div className="col-md-4">
                <NewsItem title="myTitle" description="mydescp" />
            </div>
        </div>
        
        
        <NewsItem />
        
      </div>
    )
  }
}
