import * as React from 'react';

import style from './LandingHeroGradient.style';

interface Props {
  children: React.ReactNode;
}

export const LandingHeroGradient: React.FC<Props> = ({ children }: Props): JSX.Element => (
  <section className="c-landing-hero-gradient">
    {children}
    <style jsx>{style}</style>
  </section>
);
