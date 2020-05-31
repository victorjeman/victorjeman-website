import * as React from 'react';

import LandingHeroStyle from './LandingHero.style';

interface Props {
  illustration: string;
}

export const LandingHero: React.FC<Props> = ({ illustration }) => (
  <section className="c-landing-hero">
    <div className="c-landing-hero__container  [ c-container ]">
      <div className="c-landing-hero__left">
        <h1 className="c-landing-hero__title">
          <span className="c-landing-hero__title-line c-landing-hero__title-line--1">Hi There,</span>
          <span className="c-landing-hero__title-line c-landing-hero__title-line--2">I'm JEMAN ...</span>
          <span className="c-landing-hero__title-line c-landing-hero__title-line--3">Victor JEMAN</span>
        </h1>

        <p className="c-landing-hero__description">
          I love programming, some of the video games and teaching others some of the things I know. I’m not good at
          either of these but I’m learning every day in order to become a good gamer, a great programmer and a decent
          human being.
        </p>
      </div>

      <div className="c-landing-hero__right">
        <img className="c-landing-hero__illustration" src="/images/me/me1.png" alt="Victor JEMAN" />
      </div>
    </div>

    <style jsx>{LandingHeroStyle}</style>
  </section>
);
