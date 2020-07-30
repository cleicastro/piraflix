import React from 'react';
import { VideoCardContainer } from './styles';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css

function VideoCardURL({ videoTitle, videoURL, categoryColor }) {

  return (
    <VideoCardContainer>
      <Player
        playsInline
        poster="/assets/poster.png"
        src={videoURL}
      />
    </VideoCardContainer>
  );
}

export default VideoCardURL;
