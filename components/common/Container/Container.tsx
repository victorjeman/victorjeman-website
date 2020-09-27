import * as React from 'react';

import style from './Container.style';

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }: Props) => (
  <div className="c-container">
    {children}
    <style jsx>{style}</style>
  </div>
);
