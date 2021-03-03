// @ts-nocheck
import * as React from 'react';
import LazyLoad from 'react-lazyload';

import { webpImages, jpgImages } from '@settings/images.settings';

export const Image = ({
  path,
  index,
  alt,
  width,
  height,
  lazyLoad,
}: {
  path: string;
  index: number;
  alt: string;
  width?: string;
  height?: stirng;
  lazyLoad?: boolean;
}): JSX.Element => {
  console.log('here i am: ', lazyLoad);

  const picture = (
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

      <img width={width} height={height} srcSet={jpgImages[`${path}${Number(index)}`]} alt={alt} />

      <style jsx>{`
        img {
          object-fit: cover;
        }
      `}</style>
    </picture>
  );

  return lazyLoad ? <LazyLoad>{picture}</LazyLoad> : picture;
};
