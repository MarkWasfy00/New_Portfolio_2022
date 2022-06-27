import gsap from 'gsap/all'
import React, { useEffect, useRef } from 'react'

import styles from './projectpage.module.scss';
import { GithubOutlined, LinkOutlined, WifiOutlined } from '@ant-design/icons';




type Card = {
  imgPath:string;
  availability:boolean;
  title:string;
  brief?:string;
  gitHub:string;
  live:string;

}

const ProjectPage = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(sectionRef.current){
      gsap.to(sectionRef.current,{
        // backgroundColor:'black',
        opacity:1,
        duration:2,
        scrollTrigger:{
          trigger:sectionRef.current,
          scrub:true,
          start:"top center",
          end:"top top",
          
        }
      })
      gsap.to(titleRef.current,{
        y:50,
        duration:2,
        scrollTrigger:{
          trigger:sectionRef.current,
          
          start:"top center",
          end:"top top",
          
        }
      })
    }
  },[sectionRef.current,titleRef.current])


  function Card({imgPath,title,availability,brief,gitHub,live}:Card){
    return(
      <div className={styles.card}>
        <div className={styles.photo}>
          <img src={imgPath} alt="pc" />
        </div>
          <div className={styles.text}>
            <div className={`link-s ${styles.status}`}>
              <WifiOutlined className={availability ? styles.dotOnline:styles.dotOffline} />
              <div className={`link-s`}>{availability ? "Online":"Offline"}</div>
            </div>
            <div className={`link-s ${styles.titleCard}`}>{title}</div>
            <div className={`link-s ${styles.subtitle}`}>{brief}</div>
            <div className={styles.links}>
              <a target="_blank" href={gitHub}><GithubOutlined className={styles.icon} /></a>
              <a target="_blank" href={live}><LinkOutlined className={styles.icon} /></a>
            </div>
          </div>
      </div>
    )
  }

  

  return (
    <section ref={sectionRef} className={styles.projects} id="project">
      <div className="container">
        <div ref={titleRef} className={`headline-xs ${styles.title}`}>FEATURED PROJECTS.</div>
        <div className={styles.holder}>
        
          <Card title="E-commerce Website" brief="e-commerce website made with Next.js for frontend" availability gitHub="#" live="#" imgPath="/pc.png" />

          <Card title="El-var Website" brief="soccer website scrapes data from another site" availability={false} gitHub="#" live="#" imgPath="/var.png" />
        
          <Card title="Score Website" brief="website made to get high score in lighthouse" availability gitHub="#" live="#" imgPath="/score.png" />
       
          <Card title="Euro-TruckService" brief="regular website made with pure HTML/CSS" availability gitHub="#" live="#" imgPath="/euro.png" />
       
        </div>
      </div>
    </section>
  )
}

export default ProjectPage