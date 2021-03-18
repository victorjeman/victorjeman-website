import * as React from 'react';

import { Container } from '@components/common/Container/Container';
import { MySocials } from '@components/common/MySocials/MySocials';

import style from './PageFooters.style';

export const PageFooter = (): JSX.Element => (
  <footer className="c-page-footer">
    <Container>
      <div className="c-page-footer__container">
        <div>
          <p className="c-page-footer__author">© VictorJeman 2021. All rights reserved.</p>
          <ul className="c-page-footer__list">
            <li className="c-page-footer__list-item">
              <a className="c-page-footer__link" href="/terms">
                terms and conditions
              </a>
            </li>
            <li>
              <a href="/privacy">privacy policy</a>
            </li>
          </ul>
        </div>

        <MySocials />
      </div>
    </Container>

    <style jsx>{style}</style>
  </footer>
);
