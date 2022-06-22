import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import {useRef,useEffect} from 'react'

import LandingSection from "./sections/landingPage/LandingSection";
import ProjectPage from "./sections/ProjectPage/ProjectPage";

gsap.registerPlugin(ScrollTrigger)


function App() {

  // const greenBox = useRef(null)
  // const yellowBox = useRef(null)
  // const pinkBox = useRef(null)
  // const blackDiv = useRef(null)
  // const blackBox = useRef(null)
  
  // const openMe = useRef(null)


  // useEffect(() => {
  //   // gsap.to(blackDiv.current,{
  //   //   x:300,
  //   //   y:600,
  //   //   rotation:350,
  //   //   backgroundColor:"tomato",
  //   //   duration:2,
  //   //   scrollTrigger:{
  //   //     scrub:true
  //   //   }
      
  //   // })

  //   gsap.to(openMe.current,{
  //     position:"absolute",
  //     // scale:50,
  //     top:0,
  //     left:0,
  //     bottom:0,
  //     right:0,
  //     width:"100%",
  //     height:"100%",
  //     backgroundColor:"tomato",
      
      
  //     scrollTrigger:{
  //       trigger:pinkBox.current,
  //       start:"top center",
  //       end:"top 10%",
  //       scrub:1
  //     }
  //   })

    ScrollTrigger.create({
      snap:1 / (2 - 1),
     
    })
    

  // },[])


  return (
    <main>
      <LandingSection />
      <ProjectPage />
    </main>
  )
}

export default App
