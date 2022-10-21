import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    return (
      <>
        <div className="card text-start" style={{width:"18rem"}}>
          <img src={this.props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-danger">{this.props.title}</h5>
            <p className="card-text">
              {this.props.description}
            </p>
            <div className="my-1  text-muted text-primary">{this.props.date}</div>
            <a href={this.props.url} className="btn btn-danger mt-3" target="_blank" >
              Read more.. 
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
