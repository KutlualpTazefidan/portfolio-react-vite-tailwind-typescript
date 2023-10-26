// import React from 'react'
// import Plx from 'react-plx'
import styles from './GradientOverlay.module.css'; 
import { ParallaxProvider } from 'react-scroll-parallax'
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
// import Topbar from './Topbar';

const GradientOverlay = () => {
  
    const gradientOverlay: BannerLayer = {
      opacity: [0.5, 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        <div className={styles.gradientOverlay} />
      ),
      
    };
    

  return (
  <>  
    <div className={styles.parallaxContainer}>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[gradientOverlay]}
          className={styles.banner}
        />
      </ParallaxProvider>
    </div>
  </>
        )
}

export default GradientOverlay