import * as React from 'react';

import { ISizeModifier } from '@types';

import { scrollIntoView } from '@services/scrollIntoView/scrollIntoView.service';

import { ButtonExplore } from '@components/common/ButtonExplore/ButtonExplore';
import { CardSpecial } from '@components/common/CardSpecial/CardSpecial';
import { Container } from '@components/common/Container/Container';

import style from './LandingProjectsIntro.style';

export const LandingProjectsIntro: React.FC = (): JSX.Element => (
  <section className="c-landing-projects-intro">
    <Container type={ISizeModifier.medium}>
      <div className="c-landing-projects-intro__container [ js-landing-projects-intro ]">
        <h2 className="c-landing-projects-intro__title [ u-show-small-only ]">
          It's over 9000 ...{' '}
        </h2>

        <CardSpecial type={ISizeModifier.large}>
          <h2 className="c-landing-projects-intro__title [ u-show-medium-up ]">
            It's over 9000 ...{' '}
          </h2>

          <img
            className="c-landing-projects-intro__illustration"
            src="/images/random/skills.jpeg"
            alt="My skills"
          />
        </CardSpecial>

        <div className="c-landing-projects-intro__description">
          <p className="c-landing-projects-intro__text">
            At my core, I'm a <strong>front-end developer</strong>. I've started{' '}
            {new Date().getFullYear() - 2012} years ago as a freelancer by stitching together static
            websites, then I got a full time job and started working with all kinds of fancy
            libraries and frameworks.
          </p>

          <p className="c-landing-projects-intro__text">
            I can't say that I know any of them at the master level, though the ones in the{' '}
            <strong>clouds</strong> are in my focus at the moment. It so happens that my current
            project needs me to know them a little bit.
          </p>

          <p className="c-landing-projects-intro__text">
            At the moment I could say I’m still working with static websites, though the
            technologies and the whole process behind them are different and extraordinary. It's
            interesting though how some things stay classy and powerful through time.
          </p>

          <p className="c-landing-projects-intro__text">
            I'm flexible when it comes to technical requirements and not only. I can easily switch
            my trajectory if the situation requires it, and it's beneficial for the project. I will
            learn something even if it's not directly required. I will do it anyway if I feel it
            will help the project.
          </p>

          <p className="c-landing-projects-intro__text">
            For a project, I've even done automated tests with webdriver.io and created a container
            for those tests after learning the basics in a couple of days. I had to? Not really, but
            it was nice that I can help.
            <br />
            <br /> <strong>P.S.</strong> Initially, the docker setup was somewhat embarrassing to
            look at, but it's working alright now.
          </p>
        </div>

        <div className="c-landing-projects-intro__explore">
          <ButtonExplore
            modifier={ISizeModifier.medium}
            handleClick={() => {
              scrollIntoView({ selector: '.js-first-project' });
            }}
          >
            Peek at some of my projects
          </ButtonExplore>
        </div>
      </div>
    </Container>
    <style jsx>{style}</style>
  </section>
);
