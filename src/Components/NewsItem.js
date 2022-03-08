import React from 'react'

const NewsItem = (props) => {

    //  let {title, description, imgUrl, newsUrl, author, date} = this.props;
    return (
      <div>
          <div className="card" >
                <img src={props.imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.description}</p>
                  <p className="card-text"><small className="text-muted">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
                  <a href={props.newsUrl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  }
export default NewsItem;