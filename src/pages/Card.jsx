import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate  } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
// import { removeCard } from '../store/formSlice';
export const INSERT_CART = gql`
  mutation MyMutation($kue_id: String!) {
    insert_tb_cart(objects : {kue_id: $kue_id}) {
      returning {
        data_kue {
          nama_kue
        }
      }
    }
  }`

const Card = ({ image, nama_kue, harga, id}) => {
   const navigate = useNavigate();
   const [insertCart] = useMutation(INSERT_CART)

   const handleToCart = () => {
      insertCart({variables : {kue_id: id}})
      navigate('/cart')
   }

  return (
     <div className='card'>
       <img src={image} alt={nama_kue}/>
       <div className='description'>
          <p className='des-h2'>{nama_kue}</p>
          <p className='des-h2'>Rp. {harga} <span> IDR. 300000</span></p>
          <div className='icon-wrap'>
             <FontAwesomeIcon icon={faStar} className='icon'/>
             <FontAwesomeIcon icon={faStar} className='icon'/>
             <FontAwesomeIcon icon={faStar} className='icon'/>
             <FontAwesomeIcon icon={faStar} className='icon'/>
             <FontAwesomeIcon icon={faStar} className='icon'/>
          </div>
       </div>
          <div className="checkout">
            {/* <div className="checkout-left" onClick={handleClickMin}>
               <button className='btn-min-left' > - </button>
            </div> */}
            <div className="checkout-tengah">
               <button className='btn-tengah' onClick={handleToCart}>Add To Cart</button>
            </div>
            {/* <div className="checkout-right" onClick={handleClickPlus}>
               <button className='btn-min-right'> + </button>
            </div> */}
      </div> 
      <div className="circle">
            <p><FontAwesomeIcon icon={faBasketShopping} className='faCart'/></p>
      </div>  
   </div>
  );
};

export default Card;