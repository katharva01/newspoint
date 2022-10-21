import React, { Component } from "react";
import NewsItem from "./NewsItem";


export class News extends Component {

  // initialize articles array in state by fetching data from news api
  async componentDidMount() {
    document.title=this.props.category;
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&page=${this.state.page}&pageSize=${this.state.pageSize}&language=en&apiKey=${this.props.apiKey}`;
    await fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({ articles: data.articles });
      });
  }
  async componentDidUpdate() {
    document.title= `NewsPoint - ${this.props.category}` ;
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&page=${this.state.page}&pageSize=${this.state.pageSize}&language=en&apiKey=${this.props.apiKey}`;
    await fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({ articles: data.articles,totalArticles:data.totalResults });
      });
  }

  // togglePrevious= ()=>{
  //  this.setState({page:this.state.page - 1});
  // //  console.log(this.state.page)
  // }
  // toggleNext= ()=>{
  //   this.setState({page:this.state.page + 1});
  //   // console.log(this.state.page)
  // }
  // hasNext=()=>{
  //  return (this.state.pageSize*this.state.page)>= this.state.totalResults ? false:true;
  // }
  // hasPrevious=()=>{
  //   return (this.state.page>2?true:false) ;
  // }

  constructor() {
    super();
    this.state = {
      articles: [],
      page:1,
      totalArticles:0,
      pageSize:100,
    };
  }

  render() {
    return (
      
      (
        <div className="d-flex flex-column text-center  ">
          <div>
            <h1 className=" text-danger my-5">Latest News updates - NewsPoint</h1>
          </div>
          {/* <div className="d-flex justify-content-around m-3">
            <button className="btn btn-danger" onClick={this.hasPrevious && this.togglePrevious} disabled={!this.hasPrevious}> &lt;- Previous </button>
            <button className="btn btn-danger" onClick={this.hasNext && this.toggleNext} disabled={!this.hasNext}> Next -&gt; </button>
          </div> */}
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
      )
    );
  }
}

export default News;
