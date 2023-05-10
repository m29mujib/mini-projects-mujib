import './Footer.css'
import { Instagram } from 'react-feather'
import { Facebook } from 'react-feather'
import { Linkedin } from 'react-feather'
import { Youtube } from 'react-feather'
const Footer = () => {
   return(
   <div className="footer">
      <div className="footer-top">
         <div className="footer-left">
            <h1>Nuffah's</h1>
         </div>
         <div className="footer-right">
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
         </div>
        </div>

        <div className="footer-bottom">
         <div className="footer-bottom-left">
            <h1>c 2023 Nuffah's.All rights </h1>
         </div>
         <div className="footer-bottom-right">
            <Instagram className='sosial-media'/>
            <Facebook className='sosial-media'/>
            <Linkedin className='sosial-media'/>
            <Youtube className='sosial-media'/>
         </div>
      </div>     
   </div>
   )
}
export default Footer