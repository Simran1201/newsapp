import React from "react";

const NewsItem = (props)=> {
    let {title, description,newsUrl,imgUrl,author,date,source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{position:"absolute", display:"flex",right:"0px"}} className="rounded-start">
            <span className=" badge bg-danger" >{source}</span>
          </div>
          <img src={imgUrl ? imgUrl : "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2022/08/Nasa-James-Web-scaled.jpg?fit=2509%2C2560&ssl=1" } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text"> 
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown author" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary" >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}
export default NewsItem;