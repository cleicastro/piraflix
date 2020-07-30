import React from 'react';

import { VideoContainer, ResponsiveIframe } from './styles';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css

function YouTubeIframeResponsiveURL({ url }) {
  return (
    <VideoContainer>
      <ResponsiveIframe>
        <Player
          playsInline
          poster="https://occ-0-2856-3851.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXpq2J2bZwzv8yDN1Y1cpacxgOz-Y3u4x7KCTcfq-XAuD-schljmzGh46n8XCfVaem7-gKS_cUv_-MQmfGRgkVf8ys8r.jpg?r=1dc"
          src="http://guaraci.lhmtv.gq/filmes/MILAGRENACELA72019DUB.mp4?LHMTv"
        />
      </ResponsiveIframe>
    </VideoContainer>
  );
}

export default YouTubeIframeResponsiveURL;
