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
      .toFile(`${directory}/${fileName}.jpg`);
  });
};

/**
 * width: 1200 - desktop
 * width: 1000 - inpost images
 * width: 700 - inpost mobile
 * width: 1200 - hero
 * width: 750 - hero small
 * width: 650 - thumbnail desktop
 * width: 480 - thumbnail moible
 */
const changeFile = ({ path, width }) => {
  sharp(path)
    .resize({
      width,
      fit: 'cover',
    })
    .toFile(`${path}.s.jpg`);
};

changeFile({ path: './public/images/blog/edit/hero-9.png', width: 480 });
// changeInFolder({ directory: './public/images/blog/edit', width: 700 });
