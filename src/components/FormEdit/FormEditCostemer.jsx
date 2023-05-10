import { gql, useQuery } from "@apollo/client";
import { useState } from "react"
import { useLocation } from "react-router-dom"

  const styleButton = {
      width: "150px",
      backgroundColor: "#3A98B9",
      padding : "10px",
      borderRadius : "5px",
      border : "none",
      color : "white",
      marginTop : "5px"
   };

   const GET_COSTEMER = gql`
   query GetTbPesanan($_eq: String = "") {
  tb_pesanan(where: {id: {_eq: $_eq}}) {
    Alamat
    Nama
    id
    no_Hp
  }
}`

const FormEditCostumer = () => {
   const edit = useLocation()
   console.log(edit)

   const {data, loading, error} = useQuery(
        GET_COSTEMER,{
            variables: {id:edit.state.data.tb_pesanan.id}
        }
    )
    console.log(edit.state.data.tb_pesanan.id)

   const [inputData, setInputData] = useState({
        nama: edit.state.data.tb_pesanan.nama,
        alamat: edit.state.data.tb_pesanan.alamat,
        no_Hp: edit.state.data.tb_pesanan.no_Hp,
    })
    
      function handleChange(e){
            setInputData({
                ...inputData,[e.target.name]:e.target.value
            })
        }

   const submitHandler = () => {
      
   }
   return(
      <div className="form-edit-costumer">
          <div className='data-from'>
      <form className='form-pesanan' onSubmit={submitHandler}>
        <div className="nama-lengkap">
          <label htmlFor="namaLengkap">Nama Lengkap :</label>
            <input
              type="text"
              name="namaLengkap"
              id="namaLengkap"
              value={inputData.nama}
              onChange={handleChange}
              className='namaLengkap'
            />
        </div>
 
        <div className="alamat">
          <label htmlFor="alamat">Alamat : </label>
            <input
              type="text"
              name="alamat"
              id="alamat"
              value={inputData.alamat}
              onChange={handleChange}
               className='alamat'
            />
        </div>

        <div className="no">
          <label htmlFor="no">No Handphone :</label>
            <input
              type="text"
              name="no"
              id="no"
              value={inputData.no_Hp}
              onChange={handleChange}
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
      </div>
   )
}

export default FormEditCostumer