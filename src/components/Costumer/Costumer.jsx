import { gql, useQuery } from "@apollo/client"
import './Costumer.css'
import { useNavigate } from "react-router-dom"
const COSTUMER = gql`
query GetTbPesanan {
  tb_pesanan {
    Alamat
		Nama
		id
		no_Hp
  }
}
   `
<<<<<<< HEAD
=======
   
>>>>>>> main
const Costumer = () => {
   const navigate = useNavigate()
   const { data } = useQuery(COSTUMER)
   console.log(data)

   const handleClick = () => {
      navigate('/formedit', {state: {data}})
   }
   return(
      <div className="costumer">
          <div className='data-pesanan'>
            <table id="myTable" cellSpacing="0" cellPadding="20" class="mt-5 m-auto mb-5 text-center" style={{boxShadow: "10px 10px 10px rgba(0,0,0,0.2)", width: "90%"}} >
            <tr style={{backgroundColor: "#3A98B9", color: "#fff", width: "100%"}}>
               <th style={{padding: "10px"}}>Id </th>
                <th style={{padding: "10px"}}>Nama</th>
                <th style={{padding: "10px"}}>Alamat</th>
                <th style={{padding: "10px"}}>No Hp</th>
            </tr>
   {data && 
        data.tb_pesanan.map((data)=> {
         console.log(data.data_kue)
      return ( 
      <tr key={data.id} style={{padding: "20px"}}>
         <td style={{padding: "15px"}}>{data.id}</td>
         <td>{data.Nama}</td>
         <td>{data.Alamat}</td>
         <td>{data.no_Hp}</td>
         <button onClick={handleClick}>edit</button>
      </tr>
      
      )})
   }
        </table>
      </div>
    </div>
   )
}

export default Costumer