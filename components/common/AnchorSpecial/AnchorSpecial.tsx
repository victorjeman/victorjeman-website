import * as React from 'react';

import { ISizeModifier } from '@types';

import style from './AnchorSpecial.style';

interface Props {
  children: React.ReactNode;
  modifier: ISizeModifier;
}

export const AnchorSpecial: React.FC<Props> = ({ children }: Props): JSX.Element => (
  <a className="c-anchor-special">
    <span className="c-anchor-special__stripe c-anchor-special__stripe--1">{''}</span>
    <span className="c-anchor-special__text">{children}</span>
    <span className="c-anchor-special__stripe c-anchor-special__stripe--2">{''}</span>
    <style jsx>{style}</style>
  </a>
);
