import './Subscription.css'
import { useSelector } from 'react-redux'
const  Subscription = () => {
   const { theme } = useSelector((store)=> store.theme)
   return(
      <div className={`${theme} subs`}  id='categories'>
         <div className="left">
            <h1 className='subscrip'>Coba Produk Terlaris Kami</h1>
         </div>
         <div className="right">
            <p className='deskrip'>
            Inilah kreasi terbaik kami yang disukai semua orang. Murah dan manisnya kue membuat Anda menginginkan lebih dan lebih. mulai dari kue dan jenis lainnya</p>
         </div>
      </div>
   ) 
} 
export default Subscription