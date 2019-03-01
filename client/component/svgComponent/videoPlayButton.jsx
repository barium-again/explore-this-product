import React from 'react';
import styles from './svgstyles.css';

const VideoPlayButton = props => {
  return (
    <svg viewBox={'0 0 32 32'} className={styles.videoPlayerButton}>
      <path
        d={
          'M16 32C7.2 32 0 24.8 0 16S7.2 0 16 0s16 7.2 16 16-7.2 16-16 16zm0-30C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm-2.5 20.6c-.2 0-.5-.1-.7-.2-.5-.3-.8-.8-.8-1.3V10.9c0-.5.3-1.1.8-1.3.5-.3 1.1-.2 1.5 0l8 5.1c.4.3.7.8.7 1.3s-.3 1-.7 1.3l-8 5.1c-.2.1-.5.2-.8.2z'
        }
      />
    </svg>
  );
};

export default VideoPlayButton;
