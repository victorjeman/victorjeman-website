import * as React from 'react';

import { ISizeModifier } from '@types';
import style from './Container.style';

interface Props {
  children: React.ReactNode;
  padding?: string;
  type?: ISizeModifier;
}

export const Container: React.FC<Props> = ({ children, type, padding = '15' }: Props) => (
  <div className={`c-container ${type ? `c-container--${type}` : ''}`}>
    {children}
    <style jsx>
      {`
        .c-container {
          padding-left: ${padding}px;
          padding-right: ${padding}px;
        }
      `}
    </style>
    <style jsx>{style}</style>
  </div>
);
