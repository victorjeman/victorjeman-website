import * as React from 'react';

import ButtonExploreStyle from './ButtonExplore.style';
import { ISizeModifier } from '@types';

interface Props {
  children: React.ReactNode;
  modifier: ISizeModifier;
}

export const ButtonExplore: React.FC<Props> = ({ children, modifier }: Props) => (
  <button className={`c-button-explore c-button-explore--${modifier}`}>
    <span className="c-button-explore__stripe c-button-explore__stripe--1">{''}</span>
    <span className="c-button-explore__text">{children}</span>
    <span className="c-button-explore__stripe c-button-explore__stripe--2">{''}</span>
    <style jsx>{ButtonExploreStyle}</style>
  </button>
);
