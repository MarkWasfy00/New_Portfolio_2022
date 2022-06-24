import styles from './projectpage.module.scss'

const ProjectPage = () => {
  return (
    <section className={styles.projects} id="project">
      <div className={`headline-xs ${styles.title}`}>Projects.</div>
    </section>
  )
}

export default ProjectPage