import styles from './contact.module.scss';

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={`link-s ${styles.cta}`}>
          <button>GITHUB</button>
          <button>STACKOVERFLOW</button>
          <button>LINKEDIN</button>
        </div>
        <div className={styles.inTouch}>
          <div className={`link-s ${styles.title}`}>GET IN TOUCH</div>
          <div className={`link-s ${styles.subtitle}`}>I AM AVAILABLE FOR A FREELANCE PROJECT THIS YEAR. LOOKING FOR A FRONTEND DEVELOPER ? JUST GE IN TOUCH</div>
          <button className="link-s">Contact Me</button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection