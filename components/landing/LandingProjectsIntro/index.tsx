import * as React from 'react';

import LandingProjectsIntroStyle from './LandingProjectsIntro.style';

import { scrollIntoView } from '@services/scrollIntoView/scrollIntoView.service';

import { CardSpecial } from '@components/common/CardSpecial';
import { ButtonExplore } from '@components/common/ButtonExplore';

import { CardSpecialType, ISizeModifier } from '@types';

export const LandingProjectsIntro: React.FC = () => (
  <section className="c-landing-projects-intro">
    <div className="c-landing-projects-intro__container [ c-container ] [ js-landing-projects-intro ]">
      <h2 className="c-landing-projects-intro__title [ u-show-small-only ]">It's over 9000 ... </h2>

      <CardSpecial type={CardSpecialType.large}>
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
        <p>
          At my core, I'm a front-end developer. I've started by stitching together static websites
          in the beginning. Then I got a job and started working with all kinds of fancy libraries
          and frameworks.
        </p>

        <p>
          I can't say that I know any of them at the master level, though the ones that are living
          inside the <strong>clouds</strong> are my main ones at the moment. It so happens that my
          current project needs me to know them.
        </p>

        <p>
          I'm flexible when it comes to technical requirements. I'm able to switch my trajectory if
          the project needs something new and I have the capacity to learn it.
        </p>

        <p>
          For a project, I've even done automated tests with webdriver.io and created a container
          for those tests after learning about docker in ~ 3 days. <br />
          <br /> <strong>P.S.</strong> Initially the docker setup was quite shitty but it's working
          alright now.
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
    <style jsx>{LandingProjectsIntroStyle}</style>
  </section>
);
