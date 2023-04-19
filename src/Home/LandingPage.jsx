import Navbar from "../components/Navbar/Navbar"
import Landing from "../components/Landing/Landing"
import './LandingPage.css'
import CourseSection from "../components/Course Section/CourseSection"
const LandingPage = () => {
   return (
      <div>
         <Navbar/>
         <Landing/>
         <CourseSection/>
      </div>
   )
}

export default LandingPage