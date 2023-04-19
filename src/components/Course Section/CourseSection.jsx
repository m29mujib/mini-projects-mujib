import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import './CourseSection.css'

const GetMataPelajaran = gql`
query MyQuery {
  Mata_Pelajaran {
    id
    Senin
    Selasa
    Sabtu
    Rabu
    Kamis
    Jumat
  }
}
 `
const CourseSection = () => {

   const { data } = useQuery(GetMataPelajaran)
     useEffect(() => {
      //   console.log('loading', loading);
        console.log('data ', data);
      //   console.log('error = ', error);
     })

   return (
      <div>
         <h1 className="judul">MAPEL</h1>
      <div className="lingkup">
          {
            !data?
            <p>loading..</p>
            : 
            data.Mata_Pelajaran.map((x)=>{
               return (
               <div className="card">
                 <h1>{x.Senin}</h1>
               </div>
            )})
          }
      </div>
   </div>
   )
}

export default CourseSection