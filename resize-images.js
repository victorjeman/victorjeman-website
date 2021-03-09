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
 * width: 450 - mobile
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

// changeFile({ path: './public/images/blog/heroes/hero-2.jpg', width: 450 });
changeInFolder({ directory: './public/images/labs/booking-app', width: 1200 });
