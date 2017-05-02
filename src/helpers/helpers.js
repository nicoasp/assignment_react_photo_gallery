export function getOptions(photos) {
  let options = ["All"];
  photos.forEach(photo => {
    if (!options.includes(photo.filter)) {
      options.push(photo.filter);
    }
  });
  return options;
}

export function filterPhotos(photos, filterType) {
  if (filterType === "All") return photos;
  return photos.filter(photo => {
    return photo.filter === filterType;
  });
}

export function getPage(buttonText, currentPage) {
  if (buttonText === "Previous") {
    return currentPage - 1;
  } else if (buttonText === "Next") {
    return currentPage + 1;
  } else {
    return buttonText;
  }
}
