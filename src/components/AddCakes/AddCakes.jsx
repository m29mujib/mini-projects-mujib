import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import Footer from '../HalamanUtama/Footer/Footer'
import ContactUs from '../HalamanUtama/ContactUs/ContactUs'
import Instructor from '../HalamanUtama/Instructor/Instructor'

import './AddCakes.css'
const AddCakes = () => {
  const [url, setUrl] = useState('')
  const [namaKue, setNamaKue] = useState('')
  const [jenisKue, setJenisKue] = useState('')
  const [deskripsiKue, setDeskripsiKue] = useState('')
  const [harga, setHarga] = useState(50000)

  const navigate = useNavigate()

  const handleChangeUrl = (e) => {
    setUrl(e.target.value)
  }

  const handleChangeNama = (e) => {
    setNamaKue(e.target.value)
  }

  const handleDeskripsiKue = (e) => {
    setDeskripsiKue(e.target.value)
  }

  const handleJenisKue = (e) => {
    setJenisKue(e.target.value)
  }

  // const handleHarga = (e) => {
  //   setHarga(e.target.value)
  // }

  const submitHandler = (e) => {
    e.preventDefault()

    const variables = {
      image: url,
      nama_kue: namaKue,
      jenis_kue: jenisKue,
      harga: harga,
      deskripsi_kue: deskripsiKue,
      id: Math.random().toString()
    }
    // todo: axios post ke hasura
    axios
      .post(
        'https://included-guinea-34.hasura.app/v1/graphql',
        {
          query: `mutation InsertDataKue($harga: Int, $deskripsi_kue: String, $id: String, $image: String, $jenis_kue: String, $nama_kue: String) {
            insert_data_kue(objects: {harga: $harga, deskripsi_kue: $deskripsi_kue, id: $id, image: $image, jenis_kue: $jenis_kue, nama_kue: $nama_kue}) {
              affected_rows
              returning {
                harga
                   deskripsi_kue
                   id
                   image
                   jenis_kue
                   nama_kue
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
         navigate('/')
        }, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
    <div className="addCake">
      <form onSubmit={submitHandler} className='formCake'>
       <h2>Tambah Cakes</h2>
        <div className="urlGambar">
          <label htmlFor="url">Url Gambar     : </label>
            <input
              type="text"
              name="url"
              id="url"
              value={url}
              onChange={handleChangeUrl}
              className='inputCake'
            />
        </div>
 
        <div className="namaKue">
          <label htmlFor="namaKue">Nama Kue      : </label>
            <input
              type="text"
              name="namaKue"
              id="namaKue"
              value={namaKue}
              onChange={handleChangeNama}
               className='inputCake'
            />
        </div>

        <div className="deskripsiKue">
          <label htmlFor="deskripsiKue">Deskripsi Kue : </label>
            <input
              type="text"
              name="deskripsiKue"
              id="deskripsiKue"
              value={deskripsiKue}
              onChange={handleDeskripsiKue}
               className='inputCake'
            />
        </div>

        <div className="jenisKue">
          <label htmlFor="jenisKue">Jenis Kue      : </label>
            <input
              type="text"
              name="jenisKue"
              id="jenisKue"
              value={jenisKue}
              onChange={handleJenisKue}
               className='inputCake'
            />
        </div>

        <div className="harga">
          <label htmlFor="harga">Harga : </label>
            <input
              type="text"
              name="harga"
              id="harga"
               className='inputCake'
            />
            <span>{harga}</span>
        </div>

        <div className="wrap-button">
           <button disabled={!namaKue || !harga || !jenisKue || !deskripsiKue} type="submit" className='buttonCake'>Add Cakes Now</button>
        </div>
      </form>
    </div>
    <ContactUs/>
    <Instructor/>
    <Footer/>
    </>
  )
}

export default AddCakes
