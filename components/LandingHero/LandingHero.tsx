import * as React from 'react';

import LandingHeroStyle from './LandingHero.style';

interface Props {
  illustration: string;
}

export const LandingHero: React.FC<Props> = ({ illustration }) => (
  <section className="c-page-landing-hero">
    <img src={illustration} alt="" />
    <div className="c-page-landing-hero__container">Landing Hero</div>
    <style jsx>{LandingHeroStyle}</style>
  </section>
);
