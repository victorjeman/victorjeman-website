// @ts-nocheck
import * as React from 'react';
import {
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

import { ISocials } from '@types';
import { ClientOnly } from '@components/common/ClientOnly/ClientOnly';

import style from './Socials.styles';

export const Socials = ({ shareUrl, title, sticky }: ISocials): JSX.Element => {
  React.useEffect(() => {
    try {
      ((d, s, id) => {
        const fjs = d.getElementsByTagName(s)[d.getElementsByTagName(s).length - 1];
        if (d.getElementById(id)) return;
        const js = d.createElement(s);
        js.id = id;
        js.src = `//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=436744724067170`;
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    } catch (error) {
      console.log('error: ', error);
    }
  }, []);

  return (
    <div className={`c-socials ${sticky ? 'c-socials--sticky' : ''}`}>
      <div className="c-socials__item">
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={42} />
        </LinkedinShareButton>
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

      <div className="c-socials__item">
        <ClientOnly>
          <div
            className="fb-like"
            data-href={shareUrl}
            data-width="150"
            data-layout="button_count"
            data-action="like"
            data-size="large"
            data-share="true"
            data-show-faces="true"
            data-colorscheme="light"
          ></div>
        </ClientOnly>
      </div>

      <style jsx>{style}</style>
    </div>
  );
};
