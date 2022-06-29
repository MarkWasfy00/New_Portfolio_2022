import { Canvas } from '@react-three/fiber';
import gsap from 'gsap/all';
import React, { Suspense, useEffect, useRef } from 'react';
import HomeModel from './HomeModel/HomeModel';
import styles from './homepage.module.scss';

const HomePage = () => {
  const homeRef = useRef<HTMLElement>(null);


  return (
    <article  ref={homeRef} className={styles.home}>
        <div className={`container ${styles.holder}`}>
          <Canvas className={styles.canvas}>
              <Suspense fallback={null}>
                  <HomeModel />
              </Suspense>
          </Canvas>
          <div className={styles.info}>
            <div className={`link-s ${styles.title}`}>Hello...!</div>
            <div className={`link-s ${styles.subtitle}`}>my name is Mark Wasfy</div>
            <div className={`link-s ${styles.paragraph}`}> I'm a Self-taught Front-End web developer</div>
          </div>
        </div>
    </article>
  )
}

export default HomePage