import styles from './navbar.module.scss';
import Logo from './LogoModel/Logo';
import { Suspense, useEffect } from 'react';
import { GithubOutlined,LinkedinFilled } from '@ant-design/icons';
import { Canvas } from '@react-three/fiber';








const Navbar = () => {
  return (
  <nav className={styles.navbar}>
    <div className={`container ${styles.holder}`}>
      <div className={styles.slogan}>
        <Canvas style={{height:"10rem",width:"15rem"}}>
          <Suspense fallback={null}>
            <Logo />
          </Suspense>
        </Canvas>
      </div>
      <div className={`link-xl ${styles.links}`}>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={`${styles.social}`}>
        <GithubOutlined className={styles.icon} />
        <LinkedinFilled className={styles.icon} />
      </div>
    </div>
  </nav>
)
}
  
  export default Navbar