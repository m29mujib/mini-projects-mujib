import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toDarkMode, toLightMode } from '../../../store/theme';
import { useState } from 'react';
const Navbar = () => {
   const [gambar, setGambar] = useState(faMoon)
   const { theme } = useSelector((store)=> store.theme)
  const dispatch = useDispatch();

  const handleBgColor = () => {
   if(gambar == faMoon){
      dispatch(toDarkMode())
      setGambar(faSun)
   }
   else{
      dispatch(toLightMode())
      setGambar(faMoon)
   }  
  }
   return(
         <div className={`${theme} navbar`}>
            <div className="logo">
               <h2>IBU BEDAH</h2>
            </div>
   
            <div className="profile">
               <div className="search"> 
                <Link to="/" className='button'>Home</Link>
                     {/* <Link to="/addCakes" className='button'>Add Cakes</Link> */}
                <Link to="/Pesanan" className='button'>Pesanan</Link>
               </div> 
               <div className='menu'>
                 <Link to="/cart"><FontAwesomeIcon icon={faBasketShopping} className='faBars'/></Link>
               </div> 
               <div className='user'>
                  <FontAwesomeIcon icon={gambar} className='icon-dark-light' onClick={handleBgColor}/>
               </div>
            </div>
         </div>
   )
}
export default Navbar