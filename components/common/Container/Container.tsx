import * as React from 'react';

import { ISizeModifier } from '@types';
import style from './Container.style';

interface Props {
  children: React.ReactNode;
  type?: ISizeModifier;
}

export const Container: React.FC<Props> = ({ children, type }: Props) => (
  <div className={`c-container ${type ? `c-container--${type}` : ''}`}>
    {children}
    <style jsx>{style}</style>
  </div>
);
