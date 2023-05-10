import Landing from "../components/HalamanUtama/Landing/Landing"
import Subscription from "../components/HalamanUtama/Subscription/Subscription"
import Description from "../components/HalamanUtama/Categories/Description"
import Explore from "../components/HalamanUtama/Explore/Explore"
import Exploretwo from '../components/HalamanUtama/Exploretwo/Exploretwo'
import Contact from "../components/HalamanUtama/ContactUs/ContactUs"
import Instructor from "../components/HalamanUtama/Instructor/Instructor"
import Footer from "../components/HalamanUtama/Footer/Footer"
import './LandingPage.css'

// import Categories from "../components/Categories/Categories"
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
const LandingPage = () => {
   return (
      <div className="the-one-and-only">
         <Landing/>
         <Subscription/>
         <Description/>
         <Explore />
         <Exploretwo/>
         <Contact/>
         <Instructor/>
         <Footer/>
      </div>     
   )
 }
export default LandingPage