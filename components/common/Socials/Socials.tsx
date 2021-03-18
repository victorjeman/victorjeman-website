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
  FacebookShareCount,
} from 'react-share';

import { ISocials } from '@types';

import { ClientOnly } from '@components/common/ClientOnly/ClientOnly';

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

      <ClientOnly>
        <div
          className="fb-like"
          data-href={shareUrl}
          data-width=""
          data-layout="box_count"
          data-action="like"
          data-size="small"
          data-share="true"
        ></div>
      </ClientOnly>

      <style jsx>{style}</style>
    </div>
  );
};
