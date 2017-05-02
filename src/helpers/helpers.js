export function getOptions(photos) {
  let options = [];
  photos.forEach(photo => {
    if (!options.includes(photo.filter)) {
      options.push(photo.filter);
    }
  });
  return options;
};