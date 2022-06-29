import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import ContactSection from "./components/footer/ContactSection";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./sections/HomePage/HomePage";
import ProjectPage from "./sections/ProjectPage/ProjectPage";
gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main>
      <section className="section">
        <Navbar />
        <HomePage />
      </section>
      <ProjectPage />
      <ContactSection />
    </main>
  )
}

export default App
