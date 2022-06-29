import styles from './navbar.module.scss';
import { FileTextOutlined, GithubOutlined,LinkedinFilled, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';








const Navbar = () => {

  const [showMenu,setShowMenu] = useState(false)


  return (
  <nav id="home" className={styles.navbar}>
    <div className={`container ${styles.holder}`}>
      <div className={styles.slogan}>
        <img src="/logo.png" alt="logo" width="110" height="110" />
      </div>
      <ul className={`link-xl ${styles.links}`}>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#project">PROJECTS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      <div className={`${styles.social}`}>
        <a target="_blank" href="https://github.com/MarkWasfy00"><GithubOutlined className={styles.icon} /></a>
        <a target="_blank" href="https://www.linkedin.com/in/mark-wasfy-595ba1235/"><LinkedinFilled className={styles.icon} /></a>
        <a target="_blank" href="https://drive.google.com/file/d/1xJY36gKf3ENfg-MH3vo_c40oXNAeeKP_/view?usp=sharing"><FileTextOutlined className={styles.icon} /></a>
      </div>
      <div className={styles.mobileNav} onClick={() => setShowMenu(old => !old)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.mobileSide} ${showMenu ? styles.show:''}`}>
        <ul className="link-s">
        <div className={`link-s ${styles.exit}`}  onClick={() => setShowMenu(false)}>X</div>
          <li>
            <a href="#home" onClick={() => setShowMenu(false)} >Home</a>
          </li>
          <li>
            <a href="#project" onClick={() => setShowMenu(false)}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setShowMenu(false)} >Contact</a>
          </li>
        </ul>
      </div>
      <div className={`${styles.backshadow} ${showMenu ? styles.backshadowShow:''}`} onClick={() => setShowMenu(false)} ></div>
    </div>
  </nav>
)
}
  
  export default Navbar