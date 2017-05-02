import React from "react";
import Panel from "./elements/Panel";
import Pagination from "./Pagination";
import { getPage, sortPhotos } from "../helpers/helpers";

class PanelGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1
    };
  }

  onClickHandler = e => {
    this.setState({
      page: getPage(e.target.name, this.state.page)
    });
  };

  render() {
    const sortedPhotos = sortPhotos(this.props.photos, this.props.sort);
    const panels = sortedPhotos.map(photo => {
      const photoData = {};
      photoData.src = photo.images.thumbnail.url;
      photoData.username = photo.user.username;
      photoData.comments = photo.comments.count;
      photoData.likes = photo.likes.count;
      photoData.link = photo.link;
      photoData.createdTime = new Date(photo.created_time * 1000).toString();
      photoData.filter = photo.filter;
      photoData.caption = photo.caption ? photo.caption.text : null;

      return <Panel photoData={photoData} key={photoData.src} />;
    });

    return (
      <div>
        <Pagination
          numPhotos={panels.length}
          currentPage={this.state.page}
          onClick={this.onClickHandler}
        />
        <div className="row">
          {panels.slice(this.state.page * 12 - 12, this.state.page * 12)}
        </div>
      </div>
    );
  }
}

export default PanelGroup;
