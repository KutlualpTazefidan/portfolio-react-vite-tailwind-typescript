// import React from 'react'
import {useState,useEffect} from 'react'
import styles from './PageIntro.module.css'
import Plx from 'react-plx'

const PageIntro = () => {
  const [image1Loaded, setImage1Loaded] = useState(false);
  const [image2Loaded, setImage2Loaded] = useState(false);
  const [image3Loaded, setImage3Loaded] = useState(false);
  const [image4Loaded, setImage4Loaded] = useState(false);
  const [image5Loaded, setImage5Loaded] = useState(false);
  const [image6Loaded, setImage6Loaded] = useState(false);

  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

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


    if (image1Loaded && image2Loaded && image3Loaded && image4Loaded && image5Loaded && image6Loaded){
      setAllImagesLoaded(true)
    } 
  }, [image1Loaded, image2Loaded, image3Loaded, image4Loaded, image5Loaded, image6Loaded]);


  return (
    <div className={styles.plxContainer}>
      {allImagesLoaded ? ( 
        <>
          {/* 3_space_ship */}
          <Plx          
          parallaxData = {[
            {
              start:0,
              end:2000,
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
              start:0,
              end:2000,
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
              start:0,
              end:2000,
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
              start:0,
              end:2000,
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
              start:0,
              end:3000,
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
              start:0,
              end:4800,
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
        <div className={styles.textContainer}>
          {/* 1 text */}
          <Plx          
              parallaxData = {[
              {
                  start:0,
                  end:400,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:1.,
                  property:'opacity'
                  }]
              },
              {
                  start:1800,
                  end:2200,
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
                  start:0,
                  end:800,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:0,
                  property:'opacity'
                  }]
              },
              {
                  start:800,
                  end:1400,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:1.,
                  property:'opacity'
                  }]
              },
              {
                  start:1800,
                  end:2200,
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
        <div className={styles.textContainer}>
          {/* 3 text */}

          <Plx          
              parallaxData = {[
              {
                  start:0,
                  end:2100,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:0,
                  property:'opacity'
                  }]
              },
              {
                  start:2150,
                  end:2600,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:1.,
                  property:'opacity'
                  }]
              },
              {
                  start:3000,
                  end:3400,
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
      <div className={styles.textContainer}>
          {/* 3 text */}

          <Plx          
              parallaxData = {[
              {
                  start:0,
                  end:3300,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:0,
                  property:'opacity'
                  }]
              },
              {
                  start:3300,
                  end:3700,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:1.,
                  property:'opacity'
                  }]
              },
              {
                  start:4400,
                  end:4800,
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
                  start:0,
                  end:3700,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:0,
                  property:'opacity'
                  }]
              },
              {
                  start:3700,
                  end:4000,
                  easing: 'easeInOut',
                  properties:[{
                  startValue:0.,
                  endValue:1.,
                  property:'opacity'
                  }]
              },
              {
                  start:4400,
                  end:4800,
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
      ):(
      <div>Loading</div>
      )}
    </div>
  )
}

export default PageIntro

