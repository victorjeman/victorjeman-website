import * as React from 'react';

import CardSpecialStyle from './CardSpecial.style';
import { CardSpecialType } from '../../types';

interface Props {
  children: React.ReactNode;
  type: CardSpecialType;
}

export const CardSpecial: React.FC<Props> = ({ children, type }: Props) => (
  <article className={`c-card-special c-card-special--${type}`}>
    <div className={`c-card-special__container c-card-special__container--${type}`}>{children}</div>
    <style jsx>{CardSpecialStyle}</style>
  </article>
);
