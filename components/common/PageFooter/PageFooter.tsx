import * as React from 'react';

import { Container } from '@components/common/Container/Container';

import style from './PageFooters.style';
const LinkedInIcon = require('../../../public/images/random/linkedin.svg') as string;
const TwitterIcon = require('../../../public/images/random/twitter.svg') as string;

export const PageFooter = (): JSX.Element => (
  <footer className="c-page-footer">
    <Container>
      <div className="c-page-footer__container">
        <p className="c-page-footer__author">Victor Jeman</p>
        <div className="c-page-footer__icons">
          <div className="c-page-footer__icon">
            <a href="https://www.linkedin.com/in/victorjeman/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          {/* <div className="c-page-footer__icon">
            <TwitterIcon />
          </div> */}
        </div>
      </div>
    </Container>

    <style jsx>{style}</style>
  </footer>
);
