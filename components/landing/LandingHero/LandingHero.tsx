import * as React from 'react';
import Typewriter from 'typewriter-effect';

import { ISizeModifier } from '@types';

import { scrollIntoView } from '@services/scrollIntoView/scrollIntoView.service';

import { ButtonExplore } from '@components/common/ButtonExplore/ButtonExplore';
import { CardSpecial } from '@components/common/CardSpecial/CardSpecial';
import { Container } from '@components/common/Container/Container';

import style from './LandingHero.style';

export const LandingHero: React.FC = (): JSX.Element => (
  <section className="c-landing-hero">
    <Container>
      <div className="c-landing-hero__container">
        <div className="c-landing-hero__info">
          <h1 className="c-landing-hero__title">
            <span className="c-landing-hero__title-line c-landing-hero__title-line--1">
              Hello, I&#39;m
              <span className="c-landing-hero__title-name">Victor</span>
            </span>

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
            <CardSpecial type={ISizeModifier.medium}>
              <img
                className="c-landing-hero__illustration"
                src="/images/me/me1.png"
                alt="Victor JEMAN"
              />
            </CardSpecial>
          </div>

          <p className="c-landing-hero__description">
            I do a little bit of web development, I'm decent at it, some glue here, some duct tape
            there, and you have a webpage. I also love sharing my knowledge, I'm not particularly
            good at it, but it gives me a warm feeling when doing it. At the moment, I'm working at{' '}
            <a href="https://assist-software.net/assist-culture" target="_blank" rel="noreferrer">
              <strong>ASSIST Software</strong>
            </a>
            , a friendly and caring working place.
            <br />
            <br />
            <strong>P.S.</strong> Oh, I also love video games, except DOOM, the Marauder ruined it
            for me.
          </p>

          <div className="c-landing-hero__explore">
            <ButtonExplore
              modifier={ISizeModifier.medium}
              type="button"
              handleClick={() => {
                scrollIntoView({ selector: '.js-landing-projects-intro' });
              }}
            >
              See my power level
            </ButtonExplore>
          </div>
        </div>

        <div className="c-landing-hero__illustration-wrapper c-landing-hero__illustration-wrapper--for-medium-up [ u-show-medium-up ]">
          <CardSpecial type={ISizeModifier.medium}>
            <img
              className="c-landing-hero__illustration"
              src="/images/me/me1.png"
              alt="Victor JEMAN"
            />
          </CardSpecial>
        </div>
      </div>
    </Container>

    <style jsx>{style}</style>
  </section>
);
