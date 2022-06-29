import styles from './contact.module.scss';

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={`link-s ${styles.cta}`}>
          <button><a target="_blank" href="https://github.com/MarkWasfy00">GITHUB</a></button>
          <button><a target="_blank" href="https://stackoverflow.com/users/18587779/mark-wasfy">STACKOVERFLOW</a></button>
          <button><a target="_blank" href="https://www.linkedin.com/in/mark-wasfy-595ba1235/">LINKEDIN</a></button>
        </div>
        <div className={styles.inTouch}>
          <div className={`link-s ${styles.title}`}>GET IN TOUCH</div>
          <div className={`link-s ${styles.subtitle}`}>I AM AVAILABLE FOR A FREELANCE PROJECT THIS YEAR. LOOKING FOR A FRONTEND DEVELOPER ? JUST GE IN TOUCH</div>
          <button className="link-s"><a href="mailto: markwasfy00@gmail.com">Contact Me</a></button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection