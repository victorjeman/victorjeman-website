import * as React from 'react';

import { IPageIntro, ISizeModifier } from '@types';

import { Container } from '@components/common/Container/Container';

import style from './PageIntro.style';

export const PageIntro: React.FC<IPageIntro> = ({ pageTitle, pageDescription }: IPageIntro) => {
  return (
    <section className="c-page-intro">
      <Container type={ISizeModifier.medium}>
        <h1 className="c-page-intro__title">{pageTitle}</h1>
        <p className="c-page-intro__description">{pageDescription}</p>
      </Container>
      <style jsx>{style}</style>
    </section>
  );
};
