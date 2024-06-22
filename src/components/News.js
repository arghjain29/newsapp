import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {


  static defaultProps = {
    pagesize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0
    }
    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  async update() {
    this.props.setProgress(0);
    let Aurl = `https://newsapi.org/v2/top-headlines?` +
      `country=${this.props.country}` +
      `&category=${this.props.category}` +
      `&page=${this.state.page}` +
      `&apiKey=${this.props.APIkey}` +
      `&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true })
    let data = await fetch(Aurl);
    this.props.setProgress(40);

    let parsedData = await data.json()
    this.props.setProgress(80);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.update();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.country !== prevProps.country) {
      this.update();
    }
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let Aurl = `https://newsapi.org/v2/top-headlines?` +
      `country=${this.props.country}` +
      `&category=${this.props.category}` +
      `&page=${this.state.page + 1}` +
      `&apiKey=${this.props.APIkey}` +
      `&pageSize=${this.props.pagesize}`;
    let data = await fetch(Aurl);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })

  };


  render() {
    return (
      <>
        <h1 style={{ margin: "35px" }} className='text-center'><strong>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</strong></h1>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={(this.state.articles).length}
          next={this.fetchMoreData}
          hasMore={(this.state.articles).length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                const title = element.title ? element.title.toString().slice(0, 60) : '';
                const description = element.description ? element.description.toString().slice(0, 88) : '';
                return <div className="col-md-3 my-3" key={element.url}>
                  <NewsItem title={title} description={description} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.vectorstock.com/i/500p/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>

      </>
    )
  }
}

