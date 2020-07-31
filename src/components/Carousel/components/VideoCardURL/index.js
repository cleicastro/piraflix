import React from 'react';
import { VideoCardContainer } from './styles';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css

function VideoCardURL({ videoTitle, videoURL, categoryColor, img }) {

  return (
    <VideoCardContainer>
      <Player
        playsInline
        poster={img}
        src={videoURL}
      />
    </VideoCardContainer>
  );
}

export default VideoCardURL;
