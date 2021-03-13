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
 * width: 720 - inpost images
 * width: 650 - mobile
 * width: 970 - hero
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

changeFile({ path: './public/images/blog/post-3/img-2.jpg', width: 650 });
// changeInFolder({ directory: './public/images/blog/heroes/hero-3.jpg', width: 970 });
