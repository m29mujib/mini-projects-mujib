import './Instructor.css'
import Manis from '../../../assets/manis.jpeg'
const Instructor = () => {
   return(
      <div className="instructor">
         <div>
            <p className="quotes-p">quotes</p>
            <h1 className="quotes-h1">the nuffah's cakes here are really good.<br/>Had ordered a kit kat cake which was really good. Surely worth a try.</h1>
         </div>
         <div className='ceo'>
            <img src={Manis} />
            <h1>Muhamad A Mujib</h1>
            <p>Mahasiswa Ubsi</p>
         </div>
      </div>
   )
}
export default Instructor