import * as React from 'react';
import LandingProjectStyle from './LandingProject.style';

interface Props {
  illustration: string;
  title: string;
  duration: string;
  href: string;
  divider: string;
  description: string[];
  index: number;
}

export const LandingProject: React.FC<Props> = ({
  illustration,
  title,
  duration,
  href,
  divider,
  description,
  index,
}: Props) => (
  <section
    className="c-landing-project"
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

    <div className="c-landing-project__container [ c-container ]">
      {/* TODO: Convert this into a separate component */}
      <a className="c-landing-project__see-more" href={href}>
        Investigate
      </a>
    </div>

    <style jsx>{LandingProjectStyle}</style>
  </section>
);
