import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './VideoCard.module.scss';
import Icon from '../Icon';

function VideoCard({ videoSrc, posterSrc = '', description }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.videoCard}>
      <div className={styles.videoContainer} onClick={handlePlayPause}>
        <video
          className={styles.video}
          ref={videoRef}
          controls={false}
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <div className={styles.playButton}>
            <Icon name="play" size={27} />
          </div>
        )}
      </div>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

VideoCard.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  posterSrc: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default VideoCard;
