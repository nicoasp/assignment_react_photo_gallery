import React from "react";
import Button from "./elements/Button";

const Pagination = ({numPhotos}) => {
  const numPages = Math.ceil(numPhotos / 12);
  let buttons = [];
  buttons.push(<Button buttonText="Previous" />);
  for (let i = 1; i <= numPages; i++) {
  	buttons.push(<Button buttonText={i} />)
  }
  buttons.push(<Button buttonText="Next" />);

  return (
  	<div className="row">
  		{buttons}
  	</div>
  )
}



export default Pagination