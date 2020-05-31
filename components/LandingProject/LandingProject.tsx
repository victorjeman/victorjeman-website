import * as React from 'react';
import LandingProjectStyle from './LandingProject.style';

interface Props {
  illustration: string;
  title: string;
  duration: string;
  href: string;
  divider: string;
}

export const LandingProject: React.FC<Props> = ({ illustration, title, duration, href, divider }) => (
  <section className="c-landing-project" style={{ backgroundImage: `url("/images/shape-dividers/${divider}.svg")` }}>
    <div className="c-landing-project__container [ c-container ]">
      <h2 className="c-landing-project__title">{title}</h2>

      <p className="c-landing-project__label">Timeline: {duration}</p>

      <p className="c-landing-project__label">Role: Team Lead</p>

      <div className="c-landing-project__illustration-wrapper">
        <img className="c-landing-project__illustration" src={illustration} alt="" />
      </div>

      {/* TODO: Convert this into a separate component */}
      <a className="c-landing-project__see-more" href={href}>
        See more
      </a>
    </div>

    <style jsx>{LandingProjectStyle}</style>
  </section>
);
