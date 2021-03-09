import * as React from 'react';
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

import { ISocials } from '@types';

import style from './Socials.styles';

export const Socials = ({ shareUrl, title, sticky }: ISocials): JSX.Element => {
  return (
    <div className={`c-socials ${sticky ? 'c-socials--sticky' : ''}`}>
      <div className="c-socials__item">
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={42} />
        </LinkedinShareButton>
      </div>

      <div className="c-socials__item">
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={42} />
        </FacebookShareButton>
      </div>

      <div className="c-socials__item">
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={42} />
        </TwitterShareButton>
      </div>

      <div className="c-socials__item">
        <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
          <WhatsappIcon size={42} />
        </WhatsappShareButton>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};
