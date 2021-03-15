import * as React from 'react';
import Typewriter from 'typewriter-effect';

import { ISizeModifier } from '@types';

import { Explore } from '@components/common/Explore/Explore';
import { CardSpecial } from '@components/common/CardSpecial/CardSpecial';
import { Container } from '@components/common/Container/Container';
import { Image } from '@components/common/Image/Image';
import { MySocials } from '@components/common/MySocials/MySocials';

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
                    strings: ['the web', 'playing', 'learning', 'teaching', 'dreaming'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
          </h1>

          <div className="c-landing-hero__illustration-wrapper c-landing-hero__illustration-wrapper--for-small [ u-show-small-only ]">
            <CardSpecial type={ISizeModifier.medium}>
              <div className="c-landing-hero__illustration">
                <Image path="me" index={1} alt="Victor JEMAN" width="350" height="400" />
              </div>
            </CardSpecial>
          </div>

          <p className="c-landing-hero__description">
            I love web development! I know my way around it, some glue here, some duct tape there,
            and you have a web page. I also love sharing my knowledge; I'm not yet particularly good
            at it, but it brings me joy, and I want to pursue this. At the moment, I'm working at{' '}
            <a href="https://assist-software.net/assist-culture" target="_blank" rel="noreferrer">
              <strong>ASSIST Software</strong>
            </a>
            , a friendly and caring working place.
          </p>
          <p className="c-landing-hero__description c-landing-hero__description--ps">
            <strong>P.S.</strong> I also love video games, except DOOM, the Marauder ruined it for
            me.
          </p>

          <br />

          <MySocials />

          <div className="c-landing-hero__explore">
            <Explore modifier={ISizeModifier.medium} type="anchor" href="#power-level">
              See my power level
            </Explore>
          </div>
        </div>

        <div className="c-landing-hero__illustration-wrapper c-landing-hero__illustration-wrapper--for-medium-up [ u-show-medium-up ]">
          <CardSpecial type={ISizeModifier.medium}>
            <div className="c-landing-hero__illustration">
              <Image path="me" index={1} alt="Victor JEMAN" width="500" height="410" />
            </div>
          </CardSpecial>
        </div>
      </div>
    </Container>

    <style jsx>{style}</style>
  </section>
);
