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
    tags
  } = photoData;

  return (
    <div className="col-sm-3">
      <div className="thumbnail">
        <a href="link"><img src={src} /></a>
        <div className="caption">
          <a href={`http://instagram@${username}`}><h3>{username}</h3></a>
          <p>Comments: {comments}</p>
          <p>Likes: {likes}</p>
          <p>Created at: {createdTime}</p>
          <p>Filter: {filter}</p>
          <p>Hashtags: {tags}</p>
        </div>
      </div>
    </div>
  );
};

export default Panel;
