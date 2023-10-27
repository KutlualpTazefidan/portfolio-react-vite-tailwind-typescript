import { useRef} from "react";
import styles from "./CustomNavigation.module.css";
import useScrollSnap from "react-use-scroll-snap";
import { BsFillPersonFill } from 'react-icons/bs';
import { FaTimeline } from 'react-icons/fa6';
import { PiSquaresFourFill } from 'react-icons/pi';
import { MdEmail } from 'react-icons/md';
import {Link} from 'react-router-dom'

const CustomNavigation = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 0});

  const desiredTriangleSize = 90;  
  const svgWidth = desiredTriangleSize 
  const svgHeight = desiredTriangleSize


  const scalingFactor = 1;
  // Calculate the dimensions and position of the triangle within the square
  const triangleWidth = desiredTriangleSize * scalingFactor; // Adjust as needed
  const triangleHeight = (triangleWidth * Math.sqrt(3)) / 2; // Height of an equilateral triangle

  // Calculate the coordinates of the triangle's three vertices
  const strokeWidth = 2;
  const point1 = `${triangleWidth / 2}, ${triangleHeight-strokeWidth}`;
  const point2 = `${triangleWidth-strokeWidth},${strokeWidth}` 
  const point3 = `${strokeWidth},${strokeWidth}`;

  return (
    <>
        <div className={styles.background} ref={scrollRef}>
            <div className={`${styles.navBarButtonContainer}`}>
              <div className={`${styles.navBarButton} ${styles.moveButton1}`}>
                <Link className={styles.navLink} to="/timeline">
                <div className={`${styles.buttonIcon} ${styles.buttonIconPosition2} ${styles.neon}`}>
                  <FaTimeline/>
                </div>
                <svg width={svgWidth} height={svgHeight} className={`${styles.triangleSVG0} ${styles.neon}`}>
                    <polygon points={`${point1} ${point2} ${point3}`} className={styles.polygonTriangle} />
                </svg>
                </Link>
              </div>
              <div className={`${styles.navBarButton} ${styles.moveButton2}`}>
                <Link className={styles.navLink} to="/contact">
                  <div className={`${styles.buttonIcon} ${styles.buttonIconPosition4} ${styles.neon}`}>
                    <MdEmail/>
                  </div>
                  <svg width={svgWidth} height={svgHeight} className={`${styles.triangleSVG90} ${styles.neon}`}>
                    <polygon points={`${point1} ${point2} ${point3}`} className={styles.polygonTriangle} />
                  </svg>
                </Link>
              </div>
              <div className={`${styles.navBarButton} ${styles.moveButton4}`}>
                <Link className={styles.navLink} to="/projects">
                  <div className={`${styles.buttonIcon} ${styles.buttonIconPosition3} ${styles.neon}`}>
                    <PiSquaresFourFill/>
                  </div>
                  <svg width={svgWidth} height={svgHeight} className={`${styles.triangleSVG270} ${styles.neon}`}>
                      <polygon points={`${point1} ${point2} ${point3}`} className={styles.polygonTriangle} />
                  </svg>
                </Link>
              </div>
              <div className={`${styles.navBarButton} ${styles.moveButton3}`}>
                <Link className={styles.navLink} to="/profile">
                  <div className={`${styles.buttonIcon} ${styles.buttonIconPosition1} ${styles.neon}`}>
                    <BsFillPersonFill/>
                  </div>
                  <svg width={svgWidth} height={svgHeight} className={`${styles.triangleSVG180} ${styles.neon}`}>
                      <polygon points={`${point1} ${point2} ${point3}`} className={styles.polygonTriangle} />
                  </svg>
                </Link>
              </div> 
            </div>
        </div>
    </>
  )
}

export default CustomNavigation