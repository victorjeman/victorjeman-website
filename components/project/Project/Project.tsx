import * as React from 'react';

import { IProject } from '@types';

import { Container } from '@components/common/Container/Container';

const ArrowDown = require('../../../public/images/random/arrow-down-2.svg') as string;
import style from './Project.style';

export const Project: React.FC<IProject> = ({
  illustration,
  title,
  role,
  duration,
  href,
  divider,
  description,
  index,
  investigate,
  technologies,
}: IProject): JSX.Element => (
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

          <p className="c-landing-project__label">
            <span className="c-landing-project__label-text">{duration}</span>
          </p>

          <p className="c-landing-project__label">
            <span className="c-landing-project__label-text">{duration}</span>
          </p>

          <div className="c-landing-project__illustration-wrapper [ u-show-small-only ]">
            <img className="c-landing-project__illustration" src={illustration} alt={title} />
          </div>

          <div className="c-landing-project__description">
            {description.map((item, index) => (
              <p
                className="c-landing-project__text"
                key={index}
                dangerouslySetInnerHTML={{
                  __html: `${item}`,
                }}
              ></p>
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

      {investigate && (
        <a className="c-landing-project__investigate" href={href} target="_blank" rel="noreferrer">
          Investigate
        </a>
      )}

      <div className="c-landing-project__arrow-down">
        <ArrowDown />
      </div>
    </Container>

    <style jsx>{style}</style>
  </section>
);
