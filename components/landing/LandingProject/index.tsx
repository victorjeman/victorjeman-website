import * as React from 'react';

import LandingProjectStyle from './LandingProject.style';

import { scrollIntoView } from '@services/scrollIntoView/scrollIntoView.service';

import { ButtonExplore } from '@components/common/ButtonExplore';

import { ISizeModifier } from '@types';

interface Props {
  illustration: string;
  title: string;
  duration: string;
  href: string;
  divider: string;
  description: string[];
  index: number;
  isLast: boolean;
}

export const LandingProject: React.FC<Props> = ({
  illustration,
  title,
  duration,
  href,
  divider,
  description,
  index,
  isLast,
}: Props) => (
  <section
    className={`c-landing-project [ js-landing-project--${index} ]`}
    style={{
      backgroundImage: `url("/images/shape-dividers/${divider}.svg")`,
    }}
  >
    <div
      className={`c-landing-project__container ${
        index % 2 === 0 ? 'c-landing-project__container--reverse' : ''
      } [ c-container ]`}
    >
      <div className="c-landing-project__column c-landing-project__column--1">
        <h2 className="c-landing-project__title">{title}</h2>

        <p className="c-landing-project__label">{duration}</p>

        <p className="c-landing-project__label">Role: Team Lead</p>

        <div className="c-landing-project__illustration-wrapper [ u-show-small-only ]">
          <img className="c-landing-project__illustration" src={illustration} alt={title} />
        </div>

        <div className="c-landing-project__description">
          {description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>

      <div className="c-landing-project__column c-landing-project__column--2">
        <div className="c-landing-project__illustration-wrapper [ u-show-medium-up ]">
          <img className="c-landing-project__illustration" src={illustration} alt={title} />
        </div>
      </div>
    </div>

    <div className="c-landing-project__buttons [ c-container ]">
      <a className="c-landing-project__investigate" href={href}>
        Investigate
      </a>

      {!isLast && (
        <div className="c-landing-project__explore-further">
          <ButtonExplore
            modifier={ISizeModifier.medium}
            handleClick={() => {
              scrollIntoView({ selector: `.js-landing-project--${index + 1}` });
            }}
          >
            Keep exploring
          </ButtonExplore>
        </div>
      )}
    </div>

    <style jsx>{LandingProjectStyle}</style>
  </section>
);
