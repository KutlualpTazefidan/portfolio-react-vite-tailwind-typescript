import React, { useRef, useState, useEffect } from 'react';
import styles from './CustomVideo.module.css'
interface CustomVideoProps {
  videoPath: string;
}

const CustomVideo: React.FC<CustomVideoProps> = ({ videoPath }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Slow down the playback speed
      video.playbackRate = 0.5; // Adjust the value as needed

     // Handle the video end event to fade it out
     video.addEventListener('ended', () => {
      // video.style.opacity = '0'; // Fading out the video
      setVideoEnded(true)
    });

    video.addEventListener('transitionend', (e) => {
      // Check if the opacity transition has ended
      if (e.propertyName === 'opacity' && !videoEnded) {
        // Element is still visible, you can hide it here
        setIsHidden(true);
      }
    });

    video.addEventListener('canplay', () => {
      // The video is ready to play, so start it here
      video.play();
    });    }
  }, [videoEnded]);

  return (
    <div className={`${styles.video} ${videoEnded?styles.fadeVideo:''} ${isHidden?styles.hidden:''}`}>
      <video ref={videoRef} autoPlay muted preload="auto">
        <source src={videoPath} type="video/webm" />
        {/* Add additional source tags for different formats if needed */}
      </video>
    </div>
  );
};

export default CustomVideo;
