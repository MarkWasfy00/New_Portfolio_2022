import styles from './navbar.module.scss';
import { GithubOutlined,LinkedinFilled, MenuOutlined } from '@ant-design/icons';








const Navbar = () => {
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
        <GithubOutlined className={styles.icon} />
        <LinkedinFilled className={styles.icon} />
      </div>
      <div className={styles.mobileNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
)
}
  
  export default Navbar