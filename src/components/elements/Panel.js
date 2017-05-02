import React from "react";

const Panel = ({ photoData }) => {
  const {
    src,
    username,
    comments,
    likes,
    link,
    createdTime,
    filter,
    caption
  } = photoData;

  return (
    <div className="col-sm-4">
      <div className="thumbnail">
        <a href={link}><img src={src} alt="Hello hello" /></a>
        <div className="caption">
          <a href={`http://instagram@${username}`}><h3>{username}</h3></a>
          <p>Comments: {comments}</p>
          <p>Likes: {likes}</p>
          <p>{createdTime}</p>
          <p>Filter: {filter}</p>
          <p>{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Panel;
