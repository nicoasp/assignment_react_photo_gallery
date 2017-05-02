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

export function sortPhotos(photos, sortObject) {
  return photos.sort((a, b) => {
    let sortBy = sortObject.type;
    sortBy = sortBy.split(" ");
    if (sortBy.length === 1) {
      if (sortObject.direction === "asc") {
        return a[sortBy[0]] - b[sortBy[0]];
      } else {
        return b[sortBy[0]] - a[sortBy[0]];
      }
    } else {
      if (sortObject.direction === "asc") {
        return a[sortBy[0]][sortBy[1]] - b[sortBy[0]][sortBy[1]];
      } else {
        return b[sortBy[0]][sortBy[1]] - a[sortBy[0]][sortBy[1]];
      }
    }
  });
}

export function searchPhotos(photos, searchValue) {
  let regex = new RegExp(searchValue, 'i');
  return photos.filter((photo) => {
    if (photo.caption) {
      return (regex.exec(photo.caption.text) || regex.exec(photo.user.username))
    } else {
      return regex.exec(photo.user.username)
    }    
  })
}




