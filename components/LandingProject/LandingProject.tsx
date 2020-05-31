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
      <img className="c-landing-project__ilustration" src={illustration} alt="" />
      <h2 className="c-landing-project__title">{title}</h2>
      <p className="c-landing-project__duration">{duration}</p>
      <a className="c-landing-project__see-more" href={href}>
        See more
      </a>
    </div>

    <style jsx>{LandingProjectStyle}</style>
  </section>
);
