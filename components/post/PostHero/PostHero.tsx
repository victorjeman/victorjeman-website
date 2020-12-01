import * as React from 'react';

import { IPostData } from '@types';

import style from './PostHero.style';

interface Props {
  data: IPostData;
}

export const PostHero = ({ data }: Props): JSX.Element => (
  <h1 className="c-post-hero__title">
    {data.title}
    <style jsx>{style}</style>
  </h1>
);
