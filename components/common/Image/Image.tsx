// @ts-nocheck
import * as React from 'react';

import { webpImages, jpgImages } from '@settings/images.settings';

export const Image = ({
  path,
  index,
  alt,
}: {
  path: string;
  index: number;
  alt: string;
}): JSX.Element => (
  <picture>
    <source srcSet={webpImages[`${path}${Number(index)}`]} type="image/webp" />
    <source srcSet={jpgImages[`${path}${Number(index)}`]} type="image/jpeg" />
    <img srcSet={jpgImages[`${path}${Number(index)}`]} alt={alt} />
  </picture>
);
