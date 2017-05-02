import React from "react";
import Panel from "./elements/Panel";
import Pagination from './Pagination';

class PanelGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1
    }
  }

  render() {
    const panels = this.props.photos.map(photo => {
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
      <div>
        <Pagination numPhotos={panels.length} />
        <div className="row">
          {panels.slice((this.state.page * 12 - 12), (this.state.page * 12))}
        </div>
      </div>
    );    
  }




};

export default PanelGroup;
