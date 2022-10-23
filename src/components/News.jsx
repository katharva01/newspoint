import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  // initialize articles array in state by fetching data from news api
  async componentDidMount() {
    document.title = this.props.category;
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&page=${this.state.page}&pageSize=${this.state.pageSize}&language=en&apiKey=${this.props.apiKey}`;
    await fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          articles: data.articles,
          totalArticles: data.totalResults,
        });
      });
  }

  togglePrevious = async () => {
    if (this.state.page >= 2 ? true : false) {
      document.title = `NewsPoint - ${this.props.category}`;
      const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&page=${this.state.page - 1}&pageSize=${this.state.pageSize}&language=en&apiKey=${this.props.apiKey}`;
      await fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          this.setState({
            articles: data.articles,
            totalArticles: data.totalResults,
          });
        });
      this.setState({ page: this.state.page - 1 });
    }
  };

  toggleNext = async () => {
    if (
      !(this.state.pageSize * this.state.page < this.state.totalArticles
        ? false
        : true)
    ) {
      console.log();
      document.title = `NewsPoint - ${this.props.category}`;
      const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&page=${this.state.page + 1}&pageSize=${this.state.pageSize}&language=en&apiKey=${this.props.apiKey}`;
      await fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          this.setState({ articles: data.articles });
        });
      this.setState({ page: this.state.page + 1 });
    }
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      pageSize: 10,
    };
  }

  render() {
    return (
      <div className="d-flex flex-column text-center  ">
        <div>
          <h1 className=" text-danger my-5">Latest News updates - NewsPoint</h1>
        </div>
        <div className="d-flex justify-content-around m-3">
          <button className="btn btn-danger" onClick={this.togglePrevious}>
            {" "}
            &lt;- Previous{" "}
          </button>
          <button className="btn btn-danger" onClick={this.toggleNext}>
            {" "}
            Next -&gt;{" "}
          </button>
        </div>
        <div className="container d-flex flex-wrap justify-content-center  border align-items-stretch gap-5 my-2 p-3">
          {/* return array of newsItem components  */}

          {this.state.articles.map((article) => {
            return (
              <NewsItem
                key={article.url}
                title={article.title}
                imageUrl={article.urlToImage}
                description={article.description}
                url={article.url}
                date={article.publishedAt}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
