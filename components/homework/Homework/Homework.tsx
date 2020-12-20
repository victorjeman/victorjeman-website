import * as React from 'react';

import { ISizeModifier, IHomework } from '@types';

import { FONT } from 'common/settings/font.settings';

import { Container } from '@components/common/Container/Container';
import { HomeworkContent } from '@components/homework/HomeworkContent/HomeworkContent';
import { HomeworkHero } from '@components/homework/HomeworkHero/HomeworkHero';

interface Props {
  homework: IHomework;
}

export const Homework = ({ homework }: Props): JSX.Element => (
  <Container type={ISizeModifier.large}>
    <HomeworkHero data={homework.data} />

    <HomeworkContent content={homework.content} />

    <section className="c-labs-feedback">
      <h2 className="c-labs-feedback__title">Help me to help you!</h2>

      <p className="c-labs-feedback__intro">
        Before releasing my next labs, I would like to learn more about how to enhance them so that
        they would bring you the value you need.
      </p>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe7XKgsgIOJJ0tIRctzgcsDO9zNuK9Oi7_8mTprL995MgYHfw/viewform?embedded=true"
        height="1631"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </section>

    <style jsx>
      {`
        .c-labs-feedback {
          margin: 6rem auto 2rem auto;
          max-width: 640px;
          width: 100%;
        }

        .c-labs-feedback__title {
          font-size: 2.5rem;
          font-family: ${FONT.MERRIWEATHER};
          margin-top: 2rem;
          margin-bottom: 2rem;
        }

        .c-labs-feedback__title:after {
          margin-top: 5px;
          content: '';
          display: block;
          height: 8px;
          width: 120px;
          background-color: #fa6866;
        }

        .c-labs-feedback__intro {
          font-family: ${FONT.MERRIWEATHER};
          font-size: 1.2rem;
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .c-labs-feedback iframe {
          width: 100%;
        }
      `}
    </style>
  </Container>
);
