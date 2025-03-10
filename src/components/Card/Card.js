import React from "react";
import "./Card.css";
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card(props) {
  console.log(props.isLiked);
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.author}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.props.title}</h5>
          <div className="card-date">{props.props.date}</div>
        </div>
      </div>
      <img className="card-image" src={props.image.food} alt="Logo" />
      <div className="card-text">{props.props.description}</div>
      <div className="card-like-bar">
        {props.isLiked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{props.likeCount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}
