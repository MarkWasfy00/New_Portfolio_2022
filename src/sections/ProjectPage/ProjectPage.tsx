import gsap from 'gsap/all'
import { useEffect, useRef } from 'react'
import styles from './projectpage.module.scss';
import { GithubOutlined, LinkOutlined, WifiOutlined } from '@ant-design/icons';

const ProjectPage = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const cardImgRef = useRef<HTMLImageElement>(null)
  const cardTitleRef = useRef<HTMLDivElement>(null)
  const cardDescRef = useRef<HTMLDivElement>(null)
  const cardGithubRef = useRef<HTMLAnchorElement>(null)
  const cardLinkRef = useRef<HTMLAnchorElement>(null)


  useEffect(() => {
    const start = "200px top";
    const end = "bottom bottom";
    const scrollDef = {
      scrollTrigger:{
        scrub:true,
        start:start,
        end:end,
    }}
    
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
        z:50,
        duration:2,
        scrollTrigger:{
          trigger:sectionRef.current,
          scrub:true,
          start:"top center",
          end:"top top",
          
        }
      })
      gsap.to(cardRef.current,{
       ease:"none",
        scrollTrigger:{
          trigger:sectionRef.current,
          scrub:true,
          pin:cardRef.current,
          start:start,
          end:end,
        }
      })
      
      const titleTl = gsap.timeline(scrollDef);
      const imgTl = gsap.timeline(scrollDef);
      const descTl = gsap.timeline(scrollDef);
      const githubTl = gsap.timeline(scrollDef);
      const linkTl = gsap.timeline(scrollDef);
      

      titleTl
        .to(cardTitleRef.current,{
          innerHTML:"E-commerce Website"
        })
        .to(cardTitleRef.current,{
          innerHTML:"El-var Website"
        })
        .to(cardTitleRef.current,{
          innerHTML:"Score Website"
        })
        .to(cardTitleRef.current,{
          innerHTML:"Euro Website"
        })
      
      imgTl
        .to(cardImgRef.current,{
          attr:{
            src:"/pc.png"
          }
        })
        .to(cardImgRef.current,{
          attr:{
            src:"/var.png"
          }
        })
        .to(cardImgRef.current,{
          attr:{
            src:"/score.png"
          }
        })
        .to(cardImgRef.current,{
          attr:{
            src:"/euro.png"
          }
        })
      
      descTl
        .to(cardDescRef.current,{
          innerHTML:"e-commerce website made with Next.js for frontend"
        })
        .to(cardDescRef.current,{
          innerHTML:"soccer website scrapes data from another site"
        })
        .to(cardDescRef.current,{
          innerHTML:"website made to get high score in lighthouse"
        })
        .to(cardDescRef.current,{
          innerHTML:"regular website made with pure HTML/CSS"
        })
      
      githubTl
        .to(cardGithubRef.current,{
          attr:{
            href:'https://facebook.com'
          }
        })
        .to(cardGithubRef.current,{
          attr:{
            href:'https://facebook.com'
          }
        })
        .to(cardGithubRef.current,{
          attr:{
            href:'https://facebook.com'
          }
        })
        .to(cardGithubRef.current,{
          attr:{
            href:'https://facebook.com'
          }
        })
        
      linkTl
        .to(cardLinkRef.current,{
          href:"mazor"
        })
        .to(cardLinkRef.current,{
          href:"mazor"
        })
        .to(cardLinkRef.current,{
          href:"mazor"
        })
        .to(cardLinkRef.current,{
          href:"mazor"
        })
    }
  },[sectionRef.current,titleRef.current,cardRef.current])

  
  return (
    <section ref={sectionRef} className={styles.projects} id="project">
      <div className="container">
        <div ref={titleRef} className={`headline-xs ${styles.title}`}>FEATURED PROJECTS.</div>
        <div className={styles.holder}>
        
        <div ref={cardRef} className={styles.card}>
          <div  className={styles.photo}>
            <img ref={cardImgRef} src={"/pc.png"} alt="pc" />
          </div>
            <div className={styles.text}>
              <div className={`link-s ${styles.status}`}>
                <WifiOutlined  className={styles.dotOnline} />
                <div className={`link-s`}>{"Online"}</div>
              </div>
              <div ref={cardTitleRef} className={`link-s ${styles.titleCard}`}>{'title'}</div>
              <div ref={cardDescRef} className={`link-s ${styles.subtitle}`}>{'brief'}</div>
              <div className={styles.links}>
                <a ref={cardGithubRef} target="_blank" href={"#"}><GithubOutlined className={styles.icon} /></a>
                <a ref={cardLinkRef} target="_blank" href={"#"}><LinkOutlined className={styles.icon} /></a>
              </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectPage