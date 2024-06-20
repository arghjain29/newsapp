import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'


export default class News extends Component {

  static defaultProps = {
    country: 'in',
    pagesize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false
    }
  }

  async update() {
    let Aurl = `https://newsapi.org/v2/top-headlines?` +
      `country=${this.props.country}` +
      `&category=${this.props.category}` +
      `&page=${this.state.page}` +
      `&apiKey=6925dc4f87a048aab421f26dd79f5a1c` +
      `&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true })
    let data = await fetch(Aurl);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  async componentDidMount() {
    this.update();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.update();
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.update();
  }



  render() {
    return (
      <div className="container my-3">
        <h1 style={{ margin: "35px" }} className='text-center'><strong>NewsMonkey - Top Headlines</strong></h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            const title = element.title ? element.title.toString().slice(0, 60) : '';
            const description = element.description ? element.description.toString().slice(0, 88) : '';
            return <div className="col-md-4 my-3" key={element.url}>
              <NewsItem title={title} description={description} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.vectorstock.com/i/500p/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="d-flex">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark me-auto" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

