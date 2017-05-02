import React, { Component } from "react";
import PanelGroup from "./PanelGroup";
import Select from "./elements/Select";
import Photos from "../photos";
const photos = Photos.data;

const getOptions = photos => {
  let options = [];
  photos.forEach(photo => {
    if (!options.includes(photo.filter)) {
      options.push(photo.filter);
    }
  });
  return options;
};

const options = getOptions(photos);

class MainBody extends Component {
  constructor() {
    super();
    this.state = {
      photos: photos
    };
  }
  render() {
    return (
      <div className="MainBody container">
        <PanelGroup photos={photos} />
      </div>
    );
  }
}

export default MainBody;
