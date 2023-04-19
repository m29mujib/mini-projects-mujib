import { Menu } from 'react-feather';
import { User } from 'react-feather'
import { Search } from 'react-feather';
import './Navbar.css'
const Navbar = () => {
   return(
      <div className='wrap'>
         <div className="navbar">
            <div className="logo">
               <h2>Nurhidayah</h2>
            </div>
            <div className="search"> 
               <input type="text" className='input'/>
               <div className='menu-search'>
                  <Search size={16}/>
               </div>
            </div>
            <div className="profile">
               <div className='menu'>
                  <Menu/>
               </div>
               <div className='user'>
                  <User/>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Navbar