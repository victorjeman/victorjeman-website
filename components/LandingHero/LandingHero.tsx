import * as React from 'react';

const VictorJeman = require('../../public/images/logo/logo-big.svg') as string;
import LandingHeroStyle from './LandingHero.style';
import { CardSpecial } from '../CardSpecial/CardSpecial';
import { CardSpecialType } from '../../types';

export const LandingHero: React.FC = () => (
  <section className="c-landing-hero">
    <div className="c-landing-hero__container  [ c-container ]">
      <h1 className="c-landing-hero__title">
        <span className="c-landing-hero__title-line c-landing-hero__title-line--2">
          I&#39;m
          <span className="c-landing-hero__title-name">
            <VictorJeman />
          </span>
        </span>

        <span className="c-landing-hero__title-line c-landing-hero__title-line--1">
          Nice to meet you,
        </span>
      </h1>

      <div className="c-landing-hero__illustration-wrapper">
        <CardSpecial type={CardSpecialType.medium}>
          <img
            className="c-landing-hero__illustration"
            src="/images/me/me2.png"
            alt="Victor JEMAN"
          />
        </CardSpecial>
      </div>

      <p className="c-landing-hero__description">
        I love programming, some of the video games and teaching others some of the things I know.
        I’m not good at either of these but I’m learning every day in order to become a good gamer,
        a great programmer and a decent human being.
      </p>
    </div>

    <style jsx>{LandingHeroStyle}</style>
  </section>
);
