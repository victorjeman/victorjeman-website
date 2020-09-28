import * as React from 'react';

import { ISizeModifier, ILandingProject } from '@types';

import { scrollIntoView } from '@services/scrollIntoView/scrollIntoView.service';

import { ButtonExplore } from '@components/common/ButtonExplore/ButtonExplore';
import { Container } from '@components/common/Container/Container';

import style from './LandingProject.style';

export const LandingProject: React.FC<ILandingProject> = ({
  illustration,
  title,
  role,
  duration,
  href,
  divider,
  description,
  index,
  isLast,
  investigate,
  technologies,
}: ILandingProject): JSX.Element => (
  <section
    className={`c-landing-project  ${
      index % 2 === 0 ? 'c-landing-project--reverse' : ''
    } [ js-landing-project--${index} ]`}
    style={{
      backgroundImage: `url("/images/shape-dividers/${divider}.svg")`,
    }}
  >
    <Container>
      <div className="c-landing-project__container">
        <div className="c-landing-project__column c-landing-project__column--1">
          <h2 className="c-landing-project__title">{title}</h2>

          <p className="c-landing-project__label">{duration}</p>

          <p className="c-landing-project__label">Role: {role}</p>

          <div className="c-landing-project__illustration-wrapper [ u-show-small-only ]">
            <img className="c-landing-project__illustration" src={illustration} alt={title} />
          </div>

          <div className="c-landing-project__description">
            {description.map((item, index) => (
              <p className="c-landing-project__text" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="c-landing-project__column c-landing-project__column--2">
          <div className="c-landing-project__illustration-wrapper [ u-show-medium-up ]">
            <img className="c-landing-project__illustration" src={illustration} alt={title} />
          </div>
        </div>
      </div>

      <h3 className="c-landing-project__played-with">played with</h3>
      <ul className="c-landing-project__technologies">
        {technologies.map((technology, index) => (
          <li className="c-landing-project__technology" key={`technology-${index}`}>
            {technology}
          </li>
        ))}
      </ul>

      <div className="c-landing-project__buttons">
        {!isLast && (
          <div className="c-landing-project__explore-further">
            <ButtonExplore
              modifier={ISizeModifier.medium}
              handleClick={() => {
                scrollIntoView({ selector: `.js-landing-project--${index + 1}` });
              }}
            >
              Keep going
            </ButtonExplore>
          </div>
        )}

        {investigate && (
          <a
            className="c-landing-project__investigate"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            Investigate
          </a>
        )}
      </div>
    </Container>

    <style jsx>{style}</style>
  </section>
);
