import './Landing.css'
import { ArrowRight } from 'react-feather'
const Landing = () => {
   return(
         <div className="images">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="school" />
            <div className="main">
               <h2>Selamat Datang Di</h2>
               <h2>Mts. Nurhidayah Cimande</h2>
            </div>
            <div className='bottom'>
               <div className='box1'></div>
               <div className="box2"></div>
               <div className="box3"></div>
               <div className='bottom-foot'>
                  <div className='kiri'>
                     <p>15 orang lebih telah mendaftar</p>
                  </div>
                  <div className="kanan">
                     <p className='deskrip'>Learn More</p>
                     <ArrowRight/>
                  </div>
               </div>
            </div>
         </div>

   )
}

export default Landing