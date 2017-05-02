import React, { Component } from "react";
import PanelGroup from "./PanelGroup";
import Select from "./elements/Select";
import Photos from "../photos";
import Form from './Form';
const photos = Photos.data;


class MainBody extends Component {
  constructor() {
    super();
    this.state = {
      photos: photos,
      filterType: '',
    };
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="MainBody container">
        <Form photos={this.state.photos} filterType={this.state.filterType} onChange={this.onChangeInput} />
        <PanelGroup photos={this.state.photos} />
      </div>
    );
  }
}

export default MainBody;
