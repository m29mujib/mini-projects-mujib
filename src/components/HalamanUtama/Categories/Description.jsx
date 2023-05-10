import './Description.css'
import Card from '../../../pages/Card'
// import { useEffect } from 'react'
import { gql, useQuery } from "@apollo/client"

const GetDataKueAll = gql`
query GetDataKue {
  data_kue {
    id
		nama_kue
		jenis_kue
		harga
		deskripsi_kue
		image
  }
}
 `

const Description = () => {

   const { data } = useQuery(GetDataKueAll)

   const handleClickCard = () => {
    console.log(data)
      //  useEffect(() => {
      //   //   console.log('loading', loading);
      //     console.log( 'data', data);
      //   //   console.log('error = ', error);
      //  })
     }

   return(
      <div className='card-description'  onClick={handleClickCard} >
            {
               !data ? 
               <p>Loading...</p> :
               data.data_kue.map((x)=>(
               <Card
                  key={x.id}
                  image={x.image}
                  nama_kue={x.nama_kue}
                  harga={x.harga}
                  id={x.id}
              />
               ))
            }
         </div>
   )
}

export default Description