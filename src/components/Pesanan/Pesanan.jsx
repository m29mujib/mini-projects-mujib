import { useNavigate } from 'react-router-dom';
import './Pesanan.css'
import { useState } from 'react';
import axios from 'axios'
import { v4 as uuidv4 } from "uuid"
import { gql, useQuery } from '@apollo/client';


  const DATA_CART = gql`
  query GetTbCart {
  tb_cart {
    kue_id
    id
    data_kue {
      nama_kue
      harga
    }
  }
}`
const Pesanan = () => {
    const styleButton = {
      width: "150px",
      backgroundColor: "#3A98B9",
      padding : "10px",
      borderRadius : "5px",
      border : "none",
      color : "white",
      marginTop : "5px"
   };

  const [namaLengkap, setNamaLengkap] = useState('')
  const [alamat, setAlamat] = useState('')
  const [noHp, setNoHp] = useState('')

  const navigate = useNavigate()

  const handleChangeName = (e) => {
    setNamaLengkap(e.target.value)
  }

  const handleChangeAlamat = (e) => {
    setAlamat(e.target.value)
  }

  const handleChangeNoHp = (e) => {
    setNoHp(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const variables = {
      Nama: namaLengkap,
      Alamat: alamat,
      no_Hp: noHp,
      id: uuidv4()
    }
    // todo: axios post ke hasura
    axios
      .post(
        'https://included-guinea-34.hasura.app/v1/graphql',
        {
          query: `mutation InsertTbPesanan( $Alamat: String!, $Nama: String!, $id: String!,  $no_Hp: String!) {
  insert_tb_pesanan(objects: { Alamat: $Alamat, Nama: $Nama, id: $id, no_Hp: $no_Hp}) {
    affected_rows
    returning {
			Alamat
			Nama
			id
			no_Hp
    }
  }
}`,

          variables,
        },
        {
          headers: {
            'x-hasura-admin-secret':
              'sz7amcZMQ3qHK01uNwhaEAlEX1KmkJGOZZ92XBdGEq4gytstxx8WLV1VB3HUgtJC',
          },
        },
      )
      .then((response) => {
        console.log(response)
        setTimeout(() => {
         navigate('/costumer')
        }, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  }

const { data } = useQuery(DATA_CART)
console.log(data)
   return(
   <div className='pesanan'>
    <div className='data-from'>
      <form className='form-pesanan' onSubmit={submitHandler}>
        <div className="nama-lengkap">
          <label htmlFor="namaLengkap">Nama Lengkap :</label>
            <input
              type="text"
              name="namaLengkap"
              id="namaLengkap"
              value={namaLengkap}
              onChange={handleChangeName}
              className='namaLengkap'
            />
        </div>
 
        <div className="alamat">
          <label htmlFor="alamat">Alamat : </label>
            <input
              type="text"
              name="alamat"
              id="alamat"
              value={alamat}
              onChange={handleChangeAlamat}
               className='alamat'
            />
        </div>

        <div className="no">
          <label htmlFor="no">No Handphone :</label>
            <input
              type="text"
              name="no"
              id="no"
              value={noHp}
              onChange={handleChangeNoHp}
               className='no'
            />
        </div>

       
         <div className="submit-button">
                  <input
                  type="submit"
                  style={styleButton}
                  id="submitData"
                  className='submit'
                  />
                   <button style={{padding: "10px 40px", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px", marginLeft: "20px"}}>Edit</button>
        </div>
     </form>
  </div>
        
        <div className='data-pesanan'>
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
      </tr>
      
      )})
   }
        </table>
        </div>
        
      </div>
   )
}

export default Pesanan