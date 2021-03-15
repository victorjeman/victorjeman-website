import * as React from 'react';

const LinkedInIcon = require('../../../public/images/icons/linkedIn.svg');
const FacebookIcon = require('../../../public/images/icons/facebook.svg');
const TwitterIcon = require('../../../public/images/icons/twitter.svg');
const InstagramIcon = require('../../../public/images/icons/instagram.svg');
const PinterestIcon = require('../../../public/images/icons/pinterest.svg');

import style from './MySocials.style';

export const MySocials = (): JSX.Element => (
  <div className="c-my-socials">
    <div className="c-my-socials__icon">
      <a href="https://www.linkedin.com/in/victorjeman" target="_blank" rel="noreferrer">
        <LinkedInIcon />
      </a>
    </div>

    <div className="c-my-socials__icon">
      <a href="https://www.facebook.com/victor.jeman.9" target="_blank" rel="noreferrer">
        <FacebookIcon />
      </a>
    </div>

    <div className="c-my-socials__icon">
      <a href="https://twitter.com/victorjeman" target="_blank" rel="noreferrer">
        <TwitterIcon />
      </a>
    </div>

    <div className="c-my-socials__icon">
      <a href="https://www.instagram.com/victor.jeman" target="_blank" rel="noreferrer">
        <InstagramIcon />
      </a>
    </div>

    <div className="c-my-socials__icon">
      <a href="https://ro.pinterest.com/victorjeman/_saved" target="_blank" rel="noreferrer">
        <PinterestIcon />
      </a>
    </div>
    <style jsx global>
      {style}
    </style>
  </div>
);
