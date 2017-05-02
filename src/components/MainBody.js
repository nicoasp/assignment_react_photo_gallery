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
      filterType: "All",
      sort: {
        type: "created_time",
        direction: "desc"
      },
      inputValue: ""
    };
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
      photos: filterPhotos(photos, e.target.value)
    });
  };

  onClickSortHandler = e => {
    e.preventDefault();
    let newDirection = this.state.sort.direction === "desc" ? "asc" : "desc";
    this.setState({
      sort: {
        type: e.target.name,
        direction: newDirection
      }
    })
  }

  onChangeSearch = e => {
    this.setState({
      inputValue: e.target.value
    })
  }



  render() {
    return (
      <div className="MainBody container">
        <Form
          photos={this.state.photos}
          filterType={this.state.filterType}
          onChange={this.onChangeInput}
          options={getOptions(photos)}
          onClick={this.onClickSortHandler}
          sort={this.state.sort}
          inputValue={this.state.inputValue}
          onChangeSearch={this.onChangeSearch}
        />
        <PanelGroup sort={this.state.sort} photos={this.state.photos} searchValue={this.state.inputValue} />
      </div>
    );
  }
}

export default MainBody;
