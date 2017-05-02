import React, { Component } from "react";
import PanelGroup from "./PanelGroup";
import Photos from "../photos";
import Form from "./Form";
const photos = Photos.data;
import { filterPhotos, getOptions } from "../helpers/helpers";

class MainBody extends Component {
  constructor() {
    super();
    this.state = {
      photos: photos,
      filterType: "All"
    };
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
      photos: filterPhotos(photos, e.target.value)
    });
  };

  render() {
    return (
      <div className="MainBody container">
        <Form
          photos={this.state.photos}
          filterType={this.state.filterType}
          onChange={this.onChangeInput}
          options={getOptions(photos)}
        />
        <PanelGroup photos={this.state.photos} />
      </div>
    );
  }
}

export default MainBody;
