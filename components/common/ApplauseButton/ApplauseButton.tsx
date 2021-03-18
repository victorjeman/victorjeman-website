// @ts-nocheck

import * as React from 'react';

import style from './ApplauseButton.style';

export const ApplauseButton = () => {
  return (
    <div>
      <applause-button color="green" style={{ width: '40px', height: '40px' }} />
      <style jsx>{style}</style>
    </div>
  );
};
