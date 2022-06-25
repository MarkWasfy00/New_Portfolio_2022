import gsap from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './projectpage.module.scss';
import { GithubOutlined, LinkOutlined, WifiOutlined } from '@ant-design/icons';
import 'swiper/css';

type Skills = {
  skill:string;
}

const ProjectPage = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if(sectionRef.current){
      gsap.to(sectionRef.current,{
        backgroundColor:'black',
        opacity:1,
        scrollTrigger:{
          trigger:sectionRef.current,
          scrub:true,
          start:"top center",
          end:"top top",
        }
      })
    }
  },[])


  function Card(){
    return(
      <div className={styles.card}>
        <div className={styles.photo}>
          <img src="/pc.png" alt="pc" />
        </div>
          <div className={styles.text}>
            <div className={`link-s ${styles.titleCard}`}>E-commerce site</div>
            {/* <div className={`link-s ${styles.status}`}>
              <WifiOutlined className={styles.dotOnline} />
              <div className={`link-s`}>Online</div>
            </div> */}
            <div className={`link-s ${styles.subtitle}`}>E-commerce full-stack site made with Next.js framework that uses firebase as database , stripe as checkout payments , authentication and authorization as auth0 , swiper js for slides animations , redux toolkit for state mangement , typescript for type checker, sass for css preproccesor , axois for http request to the api, dateFns for the date parse</div>
            {/* <div className={styles.skills}>
              <Skills skill="react" />
              <Skills skill="react" />
              <Skills skill="react" />
              <Skills skill="react" />
              <Skills skill="react" />
              
            </div> */}
            <div className={styles.links}>
              <GithubOutlined className={styles.icon} />
              <LinkOutlined className={styles.icon} />
            </div>
          </div>
      </div>
    )
  }

  

  return (
    <section ref={sectionRef} className={styles.projects} id="project">
      <div className="container">
        <div className={`headline-xs ${styles.title}`}>Projects.</div>
        <div className={styles.holder}>
        <Swiper
        className={styles.swiper}
        speed={800}
          slidesPerView={1}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ProjectPage