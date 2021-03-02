import { LANDING_WEBP, LANDING_JPG } from './landingImages.settings';
import { THUMBNAILS_WEBP, THUMBNAILS_JPG } from './thumbnailImages.settings';
import { HEROES_WEBP, HEROES_JPG } from './heroImages.settings';
import { BLOG_WEBP, BLOG_JPG } from './blogImages.settings';
import { LABS_WEBP, LABS_JPG } from './labsImages.settings';

export const webpImages = {
  ...LANDING_WEBP,
  ...THUMBNAILS_WEBP,
  ...HEROES_WEBP,
  ...BLOG_WEBP,
  ...LABS_WEBP,
};

export const jpgImages = {
  ...LANDING_JPG,
  ...THUMBNAILS_JPG,
  ...HEROES_JPG,
  ...BLOG_JPG,
  ...LABS_JPG,
};
