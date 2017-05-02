import React from "react";
import Button from "./elements/Button";

const Pagination = ({ numPhotos, currentPage, onClick }) => {
  const numPages = Math.ceil(numPhotos / 12);
  let buttons = [];
  if (currentPage != "1") {
    buttons.push(
      <Button buttonText="Previous" onClick={onClick} key="Previous" />
    );
  }
  for (let i = 1; i <= numPages; i++) {
    if (i == currentPage) {
      buttons.push(
        <Button buttonText={i} buttonType="primary" onClick={onClick} key={i} />
      );
    } else {
      buttons.push(<Button buttonText={i} onClick={onClick} key={i} />);
    }
  }
  if (currentPage != numPages) {
    buttons.push(<Button buttonText="Next" onClick={onClick} key="Next" />);
  }

  return (
    <div className="row">
      {buttons}
    </div>
  );
};

export default Pagination;
