import { gql, useMutation, useQuery } from '@apollo/client'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

const GetDataCart = gql`
query GetTbCart {
  tb_cart {
    kue_id
    id
    data_kue {
      nama_kue
      harga
    }
  }
}
`
const deleteCart = gql `
mutation MyMutation ($id: uuid!) {
  delete_tb_cart_by_pk(id: $id) {
    data_kue {
      nama_kue
      harga
    }
  }
}
 `


   const styleButtonHapus = {
      cursor: "pointer", backgroundColor: "red", color: "white", display: "flex", alignItems:"center", justifyContent: "center", border: "none", padding: "5px", borderRadius: "5px", width: "60px", marginRight: "5px", marginTop: "20px"
   }

   // const styleButtonEdit = {
   //    backgroundColor: "green", color: "white", border: "none", padding: "5px", borderRadius: "5px", width: "60px", marginTop: "20px", marginRight: "10px"
   // }
    const styleButtonPesan = {
      backgroundColor: "blue", color: "white", border: "none", padding: "5px", borderRadius: "5px", width: "60px", marginTop: "20px", marginRight: "10px"
   }
   
const Cart = () => {
   const navigate = useNavigate()
   // const [dataKue, setDataKue] = useState([])
    const { data } = useQuery(GetDataCart)
   //  console.log(data);

   const [deletepesananbyId] = useMutation(deleteCart)
   const handleNavigate = () => {
      navigate('/pesanan')
   }
   return(
      <div className='cart'>
         <h1 className='keterangan-cart'>Keranjang Anda</h1>
          <table id="myTable" cellSpacing="0" cellPadding="20" class="mt-5 m-auto mb-5 text-center" style={{boxShadow: "10px 10px 10px rgba(0,0,0,0.2)", width: "90%"}} >
            <tr style={{backgroundColor: "#3A98B9", color: "#fff", width: "100%"}}>
               <th style={{padding: "10px"}}>Id : </th>
                <th style={{padding: "10px"}}>Nama Kue</th>
                <th style={{padding: "10px"}}>Harga</th>
            </tr>
   {data && 
        data.tb_cart.map((data)=> {
         console.log(data.data_kue)
      return ( 
      <tr key={data.id} style={{padding: "20px"}}>
         <td style={{padding: "15px"}}>{data.id}</td>
         <td>{data.data_kue.nama_kue}</td>
         <td>
            {data.data_kue.harga}
         </td>
         <td>
         <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <button onClick={async () => {[ await deletepesananbyId({variables:{id:data.id}}), navigate("/cart"), window.location.reload()]}} style={styleButtonHapus}>delete</button>
         </div>
         </td>
      </tr>
      
      )})
   }
        </table>
        <button style={styleButtonPesan} onClick={handleNavigate}>Pesan</button>
      </div>
   )
}

export default Cart