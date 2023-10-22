import React from 'react'
// import Plx from 'react-plx'
import styles from './Background.module.css'; 
import { ParallaxProvider } from 'react-scroll-parallax'
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';

// <img
//   className={styles.backgroundImage} // Use the CSS Module class
//   src="/images/apollo14capsule.jpg"
//   alt="Apollo 14 Capsule - Captured during a trip in Orlando"
// />




// const gradientOverlay: BannerLayer = {
//   opacity: [0, 1, "easeOutCubic"],
//   shouldAlwaysCompleteAnimation: true,
//   expanded: false,
//   children: <div className={styles.gradient} />
// };

const Background = () => {

    const spaceship_1: BannerLayer = {
      image:
        "/images/1_space_ship.png",
      // translateY: [0, 50],
      // opacity: [1, 0.3],
      scale: [1., 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true
    };
    const spaceship_2: BannerLayer = {
      image:
        "/images/2_space_ship.png",
      translateY: [0, 50],
      // opacity: [1, 0.3],
      scale: [1., 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true
    };

    const spaceship_3: BannerLayer = {
      image:
        "/images/3_space_ship.png",
      // opacity: [1, 0.3],
      scale: [1., 1, "easeOutCubic"],
      shouldAlwaysCompleteAnimation: true
    };

    const spaceship_4_1: BannerLayer = {
    image:
      "/images/4_1_space_ship.png",
      // opacity: [1, 0.3],
      speed: -10,
      scale: [1.3 , 1.01, "easeOutCubic"]
    // shouldAlwaysCompleteAnimation: true
  };
    const spaceship_5: BannerLayer = {
    image:
      "/images/5_space_ship.png",
      // opacity: [1, 0.3],
      translateY: [0, 50],
      scale: [1.3 , 1.01, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };
  return (
    <div className={styles.parallaxContainer}>
    <ParallaxProvider>
      <ParallaxBanner
        layers={[spaceship_3,spaceship_2,spaceship_1,spaceship_4_1,spaceship_5]}
        className={styles.banner}
      />
    </ParallaxProvider>
    </div>
        )
}

export default Background

          // {/* Foreground_1 */}
          // <Plx          
          //   parallaxData = {[
          //     {
          //       start:0,
          //       end:700,
          //       easing: 'easeIn',
          //       properties:[{
          //         startValue:1,
          //         endValue:1.6,
          //         property:'scale'
          //       }]
          //     }
          //   ]}
          //   style = {{
          //     position:'fixed',
          //     left:0,
          //     top:0,
          //     width:'100%',
          //     zIndex:100
          //   }}>
          //    <img
          //      className={styles.image} 
          //      src="/images/Foreground_1.png"
          //      alt="Foreground"
          //    />
          // </Plx>

          // <Plx          
          //   parallaxData = {[
          //     {
          //       start:0,
          //       end:700,
          //       easing: 'ease-in',
          //       properties:[{
          //         startValue:1,
          //         endValue:1.6,
          //         property:'scale'
          //       }]
          //     }
          //   ]}
          //   style = {{
          //     position:'fixed',
          //     left:0,
          //     top:0,
          //     width:'100%',
          //     zIndex:100
          //   }}
          // >
          //    <img
          //      className={styles.image} 
          //      src="/images/Foreground_2.png"
          //      alt="Foreground 2"
          //    />
          // </Plx>

          // a
          // {/* 3_space_ship
          // <Plx          
          //   parallaxData = {[
          //     {
          //       start:0,
          //       end:700,
          //       easing: 'easeIn',
          //       properties:[{
          //         startValue:1,
          //         endValue:1,
          //         property:'scale'
          //       }]
          //     }
          //   ]}
          //   style = {{
          //     position:'fixed',
          //     left:0,
          //     top:0,
          //     width:'100%',
          //     zIndex:100
          //   }}
          // >
          //    <img
          //      className={styles.image} 
          //      src="/images/3_space_ship.png"
          //      alt="Foreground"
          //    />
          // </Plx>
          // {/* 1_space_ship */}
          // <Plx          
          //   parallaxData = {[
          //     {
          //       start:0,
          //       end:700,
          //       easing: 'easeIn',
          //       properties:[{
          //         startValue:1.15,
          //         endValue:1.01,
          //         property:'scale'
          //       }]
          //     }
          //   ]}
          //   style = {{
          //     position:'fixed',
          //     top:20,
          //     left:0,
          //     width:'100%',
          //     zIndex:100
          //   }}>
          //    <img
          //      className={styles.image} 
          //      src="/images/1_space_ship.png"
          //      alt="Foreground"
          //    />
          // </Plx>
          // {/* 2_space_ship */}
          // <Plx          
          //   parallaxData = {[
          //     {
          //       start:0,
          //       end:700,
          //       easing: 'easeIn',
          //       properties:[{
          //         startValue:1.15,
          //         endValue:1.01,
          //         property:'scale'
          //       }]
          //     }
          //   ]}
          //   style = {{
          //     position:'fixed',
          //     top:20,
          //     left:-20,
          //     width:'100%',
          //     zIndex:100
          //   }}>
          //    <img
          //      className={styles.image} 
          //      src="/images/2_space_ship.png"
          //      alt="Foreground"
          //    />
          // </Plx>
          // {/* 4_space_ship */}
          // <Plx          
          //   parallaxData = {[
          //     {
          //       start:0,
          //       end:700,
          //       easing: 'easeIn',
          //       properties:[{
          //         startValue:1.2,
          //         endValue:1.01,
          //         property:'scale'
          //       }]
          //     }
          //   ]}
          //   style = {{
          //     position:'fixed',
          //     left:0,
          //     top:0,
          //     width:'100%',
          //     zIndex:100
          //   }}
          // >
          //    <img
          //      className={styles.image} 
          //      src="/images/4_1_space_ship.png"
          //      alt="Foreground"
          //    />
          // </Plx> */}
          // a