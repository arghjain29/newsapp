import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false
    }
  }

  async componentDidMount() {
    let Aurl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6925dc4f87a048aab421f26dd79f5a1c`;
    let data = await fetch(Aurl);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults})
  }


  handlePrevClick = async () => {
    let Aurl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6925dc4f87a048aab421f26dd79f5a1c&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(Aurl);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 })
  }
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      console.log("no more pages");
    }
    else {
      let Aurl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6925dc4f87a048aab421f26dd79f5a1c&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(Aurl);
      let parsedData = await data.json()
      this.setState({ articles: parsedData.articles, page: this.state.page + 1 })
    }
  }


  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            const title = element.title ? element.title.toString().slice(0, 60) : '';
            const description = element.description ? element.description.toString().slice(0, 88) : '';
            return <div className="col-md my-3" key={element.url}>
              <NewsItem title={title} description={description} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.vectorstock.com/i/500p/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="d-flex">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark me-auto" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}
