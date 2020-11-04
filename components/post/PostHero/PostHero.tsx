import * as React from 'react';

import { ISizeModifier, IPostData } from '@types';

import { Container } from '@components/common/Container/Container';

import style from './PostHero.style';

interface Props {
  data: IPostData;
}

export const PostHero = ({ data }: Props): JSX.Element => (
  <Container type={ISizeModifier.large}>
    <h1 className="c-post-hero__title">{data.title}</h1>
    <style jsx>{style}</style>
  </Container>
);
