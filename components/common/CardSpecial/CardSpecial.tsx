import * as React from 'react';

import { ISizeModifier } from '@types';
import style from './CardSpecial.style';

interface Props {
  children: React.ReactNode;
  type: ISizeModifier;
}

export const CardSpecial: React.FC<Props> = ({ children, type }: Props): JSX.Element => (
  <article className={`c-card-special c-card-special--${type}`}>
    <div className={`c-card-special__container c-card-special__container--${type}`}>{children}</div>
    <style jsx>{style}</style>
  </article>
);
