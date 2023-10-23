import React from 'react'
// import Plx from 'react-plx'
import styles from './Background.module.css'; 
import { ParallaxProvider } from 'react-scroll-parallax'
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
import Topbar from './Topbar';

const Background = () => {
  
    const gradientOverlay: BannerLayer = {
      opacity: [0.5, 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        <div className={styles.gradientOverlay} />
      ),
      
    };
    
    const blackBackground: BannerLayer = {
      opacity: [0.5, 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      children: (
        // <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
        <div className={styles.blackBackground} />
      ),
    };

    const topbar: BannerLayer = {
      opacity: [0, 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true,
      expanded: false,
      speed:-10,
      // children: (<div className={styles.gradient} />),
      children: (
        // <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
        // <div className={styles.gradientOverlay} />
        <Topbar/>
      ),
      
    };



  return (
    <div className={styles.parallaxContainer}>
    <ParallaxProvider>
      <ParallaxBanner
        layers={[gradientOverlay,blackBackground]}
        className={styles.banner}
      />
    </ParallaxProvider>
    </div>
        )
}

export default Background