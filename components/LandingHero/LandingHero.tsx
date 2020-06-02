import * as React from 'react';
import Typewriter from 'typewriter-effect';

import LandingHeroStyle from './LandingHero.style';
import { CardSpecial } from '../CardSpecial/CardSpecial';
import { CardSpecialType } from '../../types';

export const LandingHero: React.FC = () => (
  <section className="c-landing-hero">
    <div className="c-landing-hero__container  [ c-container ]">
      <div className="c-landing-hero__info">
        <h1 className="c-landing-hero__title">
          <span className="c-landing-hero__title-line c-landing-hero__title-line--1">
            Hi, I&#39;m
            <span className="c-landing-hero__title-name">Victor</span>
          </span>

          {/* <span className="c-landing-hero__title-line c-landing-hero__title-line--2">
            Nice to meet you!
          </span> */}

          <span className="c-landing-hero__title-line c-landing-hero__title-line--3">
            I love
            <span className="c-landing-hero__i-love">
              <Typewriter
                options={{
                  strings: ['the web.', 'playing.', 'learning.', 'teaching.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </span>
        </h1>

        <div className="c-landing-hero__illustration-wrapper c-landing-hero__illustration-wrapper--for-small [ u-show-small-only ]">
          <CardSpecial type={CardSpecialType.medium}>
            <img
              className="c-landing-hero__illustration"
              src="/images/me/cat1.gif"
              alt="Victor JEMAN"
            />
          </CardSpecial>
        </div>

        <p className="c-landing-hero__description">
          I do a little bit of web development, I'm decent at it, some glue here, some duct tape
          there and you have a webpage. I also love sharing my knowledge, I'm not particularly good
          at it, but it gives me a warm feeling when doing it. <br />
          <br /> <strong>P.S.</strong> Oh, I also love video games, except DOOM, the Marauder ruined
          it for me.
        </p>
      </div>

      <div className="c-landing-hero__illustration-wrapper c-landing-hero__illustration-wrapper--for-medium-up [ u-show-medium-up ]">
        <CardSpecial type={CardSpecialType.large}>
          <img
            className="c-landing-hero__illustration"
            src="/images/me/me2.png"
            alt="Victor's cat"
          />
        </CardSpecial>
      </div>
    </div>

    <style jsx>{LandingHeroStyle}</style>
  </section>
);
