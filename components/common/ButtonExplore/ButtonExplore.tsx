import * as React from 'react';

import { ISizeModifier } from '@types';

import style from './ButtonExplore.style';

interface Props {
  children: React.ReactNode;
  modifier: ISizeModifier;
  handleClick: () => void;
}

export const ButtonExplore: React.FC<Props> = ({
  children,
  modifier,
  handleClick,
}: Props): JSX.Element => (
  <button className={`c-button-explore c-button-explore--${modifier}`} onClick={handleClick}>
    <span className="c-button-explore__stripe c-button-explore__stripe--1">{''}</span>
    <span className="c-button-explore__text">{children}</span>
    <span className="c-button-explore__stripe c-button-explore__stripe--2">{''}</span>
    <style jsx>{style}</style>
  </button>
);
