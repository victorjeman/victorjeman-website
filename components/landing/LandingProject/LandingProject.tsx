import * as React from 'react';

import { ILandingProject } from '@types';

import { Container } from '@components/common/Container/Container';

const ArrowDown = require('../../../public/images/random/arrow-down-2.svg') as string;
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

          <p className="c-landing-project__label">{role}</p>

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

      <ArrowDown className="c-landing-project__arrow-down" />
    </Container>

    <style jsx>{style}</style>
    <style jsx global>{`
      .c-landing-project__arrow-down {
        transform: rotate(45deg);
        margin: 90px auto 0 auto;
        display: block;
      }
    `}</style>
  </section>
);
