import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import HomeModel from './HomeModel/HomeModel';
import styles from './homepage.module.scss';

const HomePage = () => {
  return (
    <article className={styles.home}>
        <div className={`container ${styles.holder}`}>
          <Canvas className={styles.canvas}>
              <Suspense fallback={null}>
                  <HomeModel />
              </Suspense>
          </Canvas>
          <div className={styles.info}>
            <div className={`link-s ${styles.title}`}></div>
            <div className={`link-s ${styles.subtitle}`}>my name is Mark Wasfy</div>
            <div className={`link-s ${styles.paragraph}`}> I'm a Self-taught Front-End web developer</div>
          </div>
        </div>
    </article>
  )
}

export default HomePage