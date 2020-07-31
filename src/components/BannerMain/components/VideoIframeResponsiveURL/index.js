import React from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css

function YouTubeIframeResponsiveURL({ url, logo }) {
  return (
    <VideoContainer>
      <ResponsiveIframe>
        <Player
          playsInline
          poster={logo}
          src={url}
        />
      </ResponsiveIframe>
    </VideoContainer>
  );
}

export default YouTubeIframeResponsiveURL;
