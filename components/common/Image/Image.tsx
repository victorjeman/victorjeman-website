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
    <source
      media="(min-width:901px)"
      srcSet={`${webpImages[`${path}${Number(index)}`]}`}
      type="image/webp"
    />

    <source
      media="(max-width:900px)"
      srcSet={`${webpImages[`${path}${Number(index)}s`]}`}
      type="image/webp"
    />

    <source
      media="(min-width:901px)"
      srcSet={`${jpgImages[`${path}${Number(index)}`]}`}
      type="image/jpeg"
    />

    <source
      media="(max-width:900px)"
      srcSet={`${jpgImages[`${path}${Number(index)}s`]}`}
      type="image/jpeg"
    />

    <img srcSet={jpgImages[`${path}${Number(index)}l`]} alt={alt} />
  </picture>
);
