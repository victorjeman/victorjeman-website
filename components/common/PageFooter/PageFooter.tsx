import * as React from 'react';

import { Container } from '@components/common/Container/Container';
import { MySocials } from '@components/common/MySocials/MySocials';

import style from './PageFooters.style';

export const PageFooter = (): JSX.Element => (
  <footer className="c-page-footer">
    <Container>
      <div className="c-page-footer__container">
        <p className="c-page-footer__author">© VictorJeman 2021. ALL RIGHTS RESERVED.</p>
        <MySocials />
      </div>
    </Container>

    <style jsx>{style}</style>
  </footer>
);
