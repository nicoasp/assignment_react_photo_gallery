import React from "react";
import Panel from "./elements/Panel";

const PanelGroup = photos => {
  const panels = photos.photos.map(photo => {
    const photoData = {};
    photoData.src = photo.images.thumbnail.url;
    photoData.username = photo.user.username;
    photoData.comments = photo.comments.count;
    photoData.likes = photo.likes.count;
    photoData.link = photo.link;
    photoData.createdTime = photo.created_time;
    photoData.filter = photo.filter;
    photoData.tags = photo.tags.join(", ");
    return <Panel photoData={photoData} key={photoData.src} />;
  });

  return (
    <div className="row">
      {panels}
    </div>
  );
};

export default PanelGroup;
