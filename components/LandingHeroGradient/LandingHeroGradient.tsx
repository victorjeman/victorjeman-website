import * as React from 'react';

import LandingHeroGradientStyle from './LandingHeroGradient.style';

interface Props {
  children: React.ReactNode;
}

export const LandingHeroGradient: React.FC<Props> = ({ children }) => (
  <section className="c-landing-hero-gradient">
    {children}
    <style jsx>{LandingHeroGradientStyle}</style>
  </section>
);
