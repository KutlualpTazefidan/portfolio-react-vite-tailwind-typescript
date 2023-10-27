// import React from 'react'
import {useState,useEffect,useRef} from 'react'
import styles from './PageIntro.module.css'
import Plx from 'react-plx'
import { Triangle } from  'react-loader-spinner'
import useScrollSnap from "react-use-scroll-snap";

const PageIntro = () => {
  const [hideSpinner,setHideSpinner] = useState(false)
  const spinnerRef = useRef(null);
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 0});
  // const introPageLength = 5000;
  // const plxFadeIn = 0;
  // const plxWait = 0;
  // const plxFadeOut = 0;
  
  const animationsConstant = 2000;
  const AnimationLength_1 = animationsConstant;
  const AnimationLength_2 = AnimationLength_1 + animationsConstant/2;
  const AnimationLength_3 = AnimationLength_2 + animationsConstant;

  const plxStart_1 = 0;
  const plxEnd_1 = AnimationLength_1;
  const plxStart_2 = 0;
  const plxEnd_2 = AnimationLength_1;
  const plxStart_3 = 0;
  const plxEnd_3 = AnimationLength_1;
  const plxStart_4 = 0;
  const plxEnd_4 = AnimationLength_1;
  const plxStart_5 = 0;
  const plxEnd_5 = AnimationLength_2;
  const plxStart_6 = 0;
  const plxEnd_6 = AnimationLength_3;

  const textAnimationEnd = 400;
  const textAnimationDelay = 1400;
  const textAnimationShift = 100;

  const plxTextFadeInStart_1 = 0;
  const plxTextFadeInEnd_1 = textAnimationEnd;
  const plxTextFadeOutStart_1 = textAnimationDelay + textAnimationEnd;
  const plxTextFadeOutEnd_1 = textAnimationEnd * 2 + textAnimationDelay;

  const plxTextAnimationDelayStart_2 = 0;
  const plxTextAnimationDelayEnd_2 = textAnimationEnd*2;
  const plxTextFadeInStart_2 = textAnimationEnd*2;
  const plxTextFadeInEnd_2 = textAnimationDelay;
  const plxTextFadeOutStart_2 = textAnimationDelay + textAnimationEnd;
  const plxTextFadeOutEnd_2 = textAnimationEnd * 2 + textAnimationDelay;

  const plxTextAnimationDelayStart_3 = 0;
  const plxTextAnimationDelayEnd_3 = textAnimationEnd * 2 + textAnimationDelay - textAnimationShift;
  const plxTextFadeInStart_3 = textAnimationEnd * 2 + textAnimationDelay - textAnimationShift;
  const plxTextFadeInEnd_3 = textAnimationEnd * 3 + textAnimationDelay;
  const plxTextFadeOutStart_3 = textAnimationEnd * 4 + textAnimationDelay;
  const plxTextFadeOutEnd_3 = textAnimationEnd * 5 + textAnimationDelay;

  const plxTextAnimationDelayStart_4 = 0;
  const plxTextAnimationDelayEnd_4 = textAnimationEnd * 5 + textAnimationDelay-textAnimationShift;
  const plxTextFadeInStart_4 = textAnimationEnd * 5 + textAnimationDelay-textAnimationShift;
  const plxTextFadeInEnd_4 = textAnimationEnd * 6 + textAnimationDelay-textAnimationShift;
  const plxTextFadeOutStart_4 = textAnimationEnd * 8 + textAnimationDelay;
  const plxTextFadeOutEnd_4 = textAnimationEnd * 9 + textAnimationDelay;

  const plxTextAnimationDelayStart_5 = 0;
  const plxTextAnimationDelayEnd_5 = textAnimationEnd * 6 + textAnimationDelay-textAnimationShift;
  const plxTextFadeInStart_5 = textAnimationEnd * 6 + textAnimationDelay-textAnimationShift;
  const plxTextFadeInEnd_5 = textAnimationEnd * 7 + textAnimationDelay;
  const plxTextFadeOutStart_5 = textAnimationEnd * 8 + textAnimationDelay;
  const plxTextFadeOutEnd_5 = textAnimationEnd * 9 + textAnimationDelay;

  const [image1Loaded, setImage1Loaded] = useState(false);
  const [image2Loaded, setImage2Loaded] = useState(false);
  const [image3Loaded, setImage3Loaded] = useState(false);
  const [image4Loaded, setImage4Loaded] = useState(false);
  const [image5Loaded, setImage5Loaded] = useState(false);
  const [image6Loaded, setImage6Loaded] = useState(false);

  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const handleSpinnerTransitionEnd = () => {
    setHideSpinner(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts (page reloads)
  }, []);

  useEffect(() => {

    const image1 = new Image();
    image1.src = '/images/1_1_space_ship.png';
    image1.onload = () => setImage1Loaded(true);

    const image2 = new Image();
    image2.src = '/images/2_space_ship.png';
    image2.onload = () => setImage2Loaded(true);

    const image3 = new Image();
    image3.src = '/images/3_1_space_ship.png';
    image3.onload = () => setImage3Loaded(true);

    const image4 = new Image();
    image4.src = '/images/4_2_space_ship.png';
    image4.onload = () => setImage4Loaded(true);

    const image5 = new Image();
    image5.src = '/images/5_1_space_ship.png';
    image5.onload = () => setImage5Loaded(true);

    const image6 = new Image();
    image6.src = '/images/6_space_ship.png';
    image6.onload = () => setImage6Loaded(true);

    // const originalOverflow = copy(document.body.style.overflow);
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (image1Loaded && image2Loaded && image3Loaded && image4Loaded && image5Loaded && image6Loaded) {
        setAllImagesLoaded(true);
        document.body.style.overflow = '';
      }
    }, 1000); 
    
  }, [image1Loaded, image2Loaded, image3Loaded, image4Loaded, image5Loaded, image6Loaded]);

  useEffect(() => {
  
    // Attach the event listener when all images are loaded and the spinner is visible
    if (allImagesLoaded) {
      const spinnerElement = spinnerRef.current as HTMLElement | null;
      spinnerElement?.addEventListener('transitionend', handleSpinnerTransitionEnd);
    }
  
    // Clean up the event listener when the component unmounts
    return () => {
      const spinnerElement = spinnerRef.current as HTMLElement | null;
      spinnerElement?.removeEventListener('transitionend', handleSpinnerTransitionEnd);
    };
  }, [allImagesLoaded]);
  

  return (
    <div className={styles.plxContainer} ref={scrollRef}> 
        <>
          <div className={`${styles.loadingSpinnerWrapper} ${allImagesLoaded ? styles.hideWrapper:''} ${hideSpinner ? styles.hideSpinner:''}`} ref={spinnerRef}>
          <Triangle
          height="80"
          width="80"
          color="#ffffff"
          ariaLabel="triangle-loading"
          visible={true}
        />
          </div>
          {/* 3_space_ship */}
          <Plx          
          parallaxData = {[
            {
              start:plxStart_1,
              end:plxEnd_1,
              easing: 'easeIn',
              properties:[{
                startValue:1.01,
                endValue:1.01,
                property:'scale'
              }]
            }
          ]}
          style = {{
            position:'fixed',
            left:0,
            top:0,
            width:'100%',
            zIndex:100
          }}
        >
            <img
              className={styles.image} 
              src="/images/3_1_space_ship.png"
              alt="3_1"
              // onLoad={() => setImage3Loaded(true)}
            />
        </Plx>
        {/* 1_space_ship */}
        <Plx          
          parallaxData = {[
            {
              start:plxStart_2,
              end:plxEnd_2,
              easing: 'easeIn',
              properties:[{
                startValue:1.03,
                endValue:1.01,
                property:'scale'
              }]
            }
          ]}
          style = {{
            position:'fixed',
            top:0,
            left:0,
            width:'100%',
            zIndex:100
          }}>
            <img
              className={styles.image} 
              src="/images/1_1_space_ship.png"
              alt="1_1"
              // onLoad={() => setImage1Loaded(true)}
            />
        </Plx>
        {/* 2_space_ship */}
        <Plx          
          parallaxData = {[
            {
              start:plxStart_3,
              end:plxEnd_3,
              easing: 'easeIn',
              properties:[{
                startValue:1.01,
                endValue:1.01,
                property:'scale'
              }]
            }
          ]}
          style = {{
            position:'fixed',
            top:0,
            left:0,
            width:'100%',
            zIndex:100
          }}>
            <img
              className={styles.image} 
              src="/images/2_space_ship.png"
              alt="2"
              // onLoad={() => setImage2Loaded(true)}
            />
        </Plx>
        {/* 4_space_ship */}
        <Plx          
          parallaxData = {[
            {
              start:plxStart_4,
              end:plxEnd_4,
              easing: 'easeOut',
              properties:[{
                startValue:1.05,
                endValue:1.01,
                property:'scale'
              }]
            }
          ]}
          style = {{
            position:'fixed',
            left:0,
            top:0,
            objectFit:'cover',
            width:'100%',
            zIndex:100
          }}
        >
            <img
              className={styles.image} 
              src="/images/4_2_space_ship.png"
              alt="4_2"
              // onLoad={() => setImage4Loaded(true)}
            />
        </Plx>
        {/* 5_space_ship */}
        <Plx          
          parallaxData = {[
            {
              start:plxStart_5,
              end:plxEnd_5,
              easing: 'easeOut',
              properties:[{
                startValue:1.5,
                endValue:1.01,
                property:'scale'
              }]
            }
          ]}
          style = {{
            position:'fixed',
            left:0,
            top:0,
            objectFit:'cover',
            width:'100%',
            zIndex:100
          }}
        >
            <img
              className={styles.image} 
              src="/images/5_1_space_ship.png"
              alt="5_1"
              // onLoad={() => setImage5Loaded(true)}
            />
        </Plx>
        {/* 6_space_ship */}
        <Plx          
          parallaxData = {[
            {
              start:plxStart_6,
              end:plxEnd_6,
              easing: 'easeOut',
              properties:[{
                startValue:3.5,
                endValue:1.01,
                property:'scale'
              }]
            }
          ]}
          style = {{
            position:'fixed',
            left:0,
            top:0,
            objectFit:'cover',
            width:'100%',
            zIndex:100
          }}
        >
            <img
              className={styles.image} 
              src="/images/6_space_ship.png"
              alt="6"
              // onLoad={() => setImage6Loaded(true)}
            />
        </Plx>

        {/* First text container */}
        <div className={styles.textContainer} ref={scrollRef}>
          {/* 1 text */}
          <Plx          
              parallaxData = {[
              {
                  start:plxTextFadeInStart_1,
                  end:plxTextFadeInEnd_1,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:1.,
                  property:'opacity'
                  }]
              },
              {
                  start:plxTextFadeOutStart_1,
                  end:plxTextFadeOutEnd_1,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:1.,
                  endValue:0.,
                  property:'opacity'
                  }]
              }
              ]}
              // style = {{
              // position:'fixed',
              // left:'50%',
              // top:'50%',
              // objectFit:'cover',
              // width:'100%',
              // zIndex:101
              // }}
          >
              <span className={styles.text}>
              Hi there, I'm Alp.
              </span>
          </Plx>

          {/* 2 text */}
          <Plx          
              parallaxData = {[
              {
                  start:plxTextAnimationDelayStart_2,
                  end:plxTextAnimationDelayEnd_2,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:0,
                  property:'opacity'
                  }]
              },
              {
                  start:plxTextFadeInStart_2,
                  end:plxTextFadeInEnd_2,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:1.,
                  property:'opacity'
                  }]
              },
              {
                  start:plxTextFadeOutStart_2,
                  end:plxTextFadeOutEnd_2,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:1.,
                  endValue:0.,
                  property:'opacity'
                  }]
              }
              ]}
              style = {{
                  opacity:0
              }}
          >
              <span className={styles.text}>
              As of today, <br/>my journey to the stars begins.
              </span>
          </Plx>
        </div>

        {/* Second Text container */}
        <div className={styles.textContainer} ref={scrollRef}>
          {/* 3 text */}

          <Plx          
              parallaxData = {[
              {
                  start:plxTextAnimationDelayStart_3,
                  end:plxTextAnimationDelayEnd_3,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:0,
                  property:'opacity'
                  }]
              },
              {
                  start:plxTextFadeInStart_3,
                  end:plxTextFadeInEnd_3,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:1.,
                  property:'opacity'
                  }]
              },
              {
                  start:plxTextFadeOutStart_3,
                  end:plxTextFadeOutEnd_3,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:1.,
                  endValue:0.,
                  property:'opacity'
                  }]
              }
              ]}
              style = {{
                  opacity:0
              }}
          >
              <span className={styles.text}>
              Cheers to everyone,<br/> who had a hand in making it happen.
              </span>
          </Plx>
      </div>
      
      {/* Third Text container */}
      <div className={styles.textContainer} ref={scrollRef}>
          {/* 4 text */}

          <Plx          
              parallaxData = {[
              {
                  start:plxTextAnimationDelayStart_4,
                  end:plxTextAnimationDelayEnd_4,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:0,
                  property:'opacity'
                  }]
              },
              {
                  start:plxTextFadeInStart_4,
                  end:plxTextFadeInEnd_4,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:1.,
                  property:'opacity'
                  }]
              },
              {
                  start:plxTextFadeOutStart_4,
                  end:plxTextFadeOutEnd_4,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:1.,
                  endValue:0.,
                  property:'opacity'
                  }]
              }
              ]}
              style = {{
                  opacity:0
              }}
          >
              <span className={styles.text}>
              Even if our paths never cross again,
              </span>
          </Plx>
          <Plx          
              parallaxData = {[
              {
                  start:plxTextAnimationDelayStart_5,
                  end:plxTextAnimationDelayEnd_5,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:0,
                  property:'opacity'
                  }]
              },
              {
                  start:plxTextFadeInStart_5,
                  end:plxTextFadeInEnd_5,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:1.,
                  property:'opacity'
                  }]
              },
              {
                  start:plxTextFadeOutStart_5,
                  end:plxTextFadeOutEnd_5,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:1.,
                  endValue:0.,
                  property:'opacity'
                  }]
              }
              ]}
              style = {{
                  opacity:0
              }}
          >
              <span className={styles.text}>
              we shall all meet in eternity.
              </span>
          </Plx>
      </div>
      </>
    </div>
  )
}

export default PageIntro

