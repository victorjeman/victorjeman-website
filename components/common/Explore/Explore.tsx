import * as React from 'react';

import { ISizeModifier } from '@types';

import style from './Explore.style';

interface Props {
  children: React.ReactNode;
  modifier?: ISizeModifier;
  handleClick?: () => void;
  href?: string;
  type: 'button' | 'anchor';
}

export const Explore: React.FC<Props> = ({
  children,
  modifier,
  type,
  href,
  handleClick,
}: Props): JSX.Element => {
  return (
    <React.Fragment>
      {type === 'button' ? (
        <button className={`c-explore c-explore--${modifier}`} onClick={handleClick}>
          <span className="c-explore__stripe c-explore__stripe--1">{''}</span>
          <span className="c-explore__text">{children}</span>
          <span className="c-explore__stripe c-explore__stripe--2">{''}</span>
        </button>
      ) : (
        <a className={`c-explore c-explore--${modifier}`} href={href}>
          <span className="c-explore__stripe c-explore__stripe--1">{''}</span>
          <span className="c-explore__text">{children}</span>
          <span className="c-explore__stripe c-explore__stripe--2">{''}</span>
        </a>
      )}
      <style jsx>{style}</style>
    </React.Fragment>
  );
};
