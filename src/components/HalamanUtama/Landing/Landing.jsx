import './Landing.css'
import Cake7 from '../../../assets/cake7.png'
import Cake5 from '../../../assets/cake5.png'
import Cake4 from '../../../assets/cake4.png'
import Stawbery from '../../../assets/stawbery.png'
import Ultah from '../../../assets/ultah.png'
import { useState } from 'react'
const Landing = () => {
   const [gambar, setGambar] = useState(Cake5)

   const handleGambar = (e) => {
     if(e.target.className === "gambar-child") {
      setGambar(e.target.src)
     }
   } 
      const handleMenuClick = (id) => {
      const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
   } 
   return(
      <div className="landing" id="home">
       <div className='wrap-landing'>
         <div className="main">
               <div className='text-judul'>
                  <h1 className='judul'>Membawa Kamu Happy Melalui Sepotong Kue</h1>
                  <h3 className='des'>kami membuat berbagai jenis kue coklat, kue lembut atau apa pun yang Anda inginkan</h3>
               </div>
               <div className="button-order">
                  <button className='btn-1' onClick={() => handleMenuClick("categories")}>Order Sekarang</button>
               </div> 
         </div>
         <div className="gambar">
               <div className='gambar-utama'>
                     <img src={gambar} alt="cake" className='gambar-one'/>
               </div>
               <div className='gambar-anak'>
                  <img src={Cake5} onClick={handleGambar}  className="gambar-child"/>
                  <img src={Cake4} onClick={handleGambar}  className="gambar-child"/>
                  <img src={Ultah} onClick={handleGambar} className="gambar-child"/>
                  <img src={Stawbery} onClick={handleGambar} className="gambar-child"/>
                  <img src={Cake7} onClick={handleGambar} className="gambar-child"/>
               </div>
         </div>
       </div>
     </div> 
   )
}

export default Landing