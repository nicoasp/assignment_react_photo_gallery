import React, { Component } from 'react';
import PanelGroup from './PanelGroup'
import Photos from '../photos'
console.log(Photos);

class MainBody extends Component {
  render() {
    return (
      <div className="MainBody container">
        <PanelGroup photos={Photos.data} />
      </div>
    )
  }
}

export default MainBody;