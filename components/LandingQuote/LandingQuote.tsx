import * as React from 'react';

import LandingQuoteStyle from './LandingQuote.style';

interface Props {
  quote: string;
  author: string;
}

export const LandingQuote: React.FC<Props> = ({ quote, author }) => (
  <section className="c-landing-quote">
    <p className="c-landing-quote__text">{quote}</p>
    <p className="c-landing-quote__author">{author}</p>
    <style jsx>{LandingQuoteStyle}</style>
  </section>
);
