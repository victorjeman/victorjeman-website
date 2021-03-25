const sharp = require('sharp');
const fs = require('fs');

// Folder
const changeInFolder = ({ directory, width }) => {
  fs.readdirSync(directory).forEach((file) => {
    const fileName = file.split('.')[0];

    sharp(`${directory}/${file}`)
      .resize({
        width,
        fit: 'cover',
      })
      .toFile(`${directory}/${fileName}.s.jpg`);
  });
};

/**
 * width: 1200 - desktop
 * width: 1000 - inpost images
 * width: 700 - inpost mobile
 * width: 970 - hero
 * width: 750 - hero small
 * width: 480 - thumbnail
 */
const changeFile = ({ path, width }) => {
  sharp(path)
    .resize({
      width,
      fit: 'cover',
    })
    .toFile(`${path}.s.jpg`);
};

// changeFile({ path: './public/images/blog/thumbnails/thumbnail-4.jpg', width: 480 });
changeInFolder({ directory: './public/images/blog/edit', width: 700 });
