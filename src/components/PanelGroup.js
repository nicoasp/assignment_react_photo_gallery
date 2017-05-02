import React from "react";
import Panel from "./elements/Panel";

const PanelGroup = photos => {
  const panels = photos.map(photo => {
    const photoData = {};
    return <Panel photoData={photoData} key={photo.username} />;
  });
};

export default PanelGroup;
