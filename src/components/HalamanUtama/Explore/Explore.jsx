import './Explore.css'
const Explore = () => {
   return(
      <div className='explore' id='about'>
         <div className="explore-left">
            <h1>Memanggang dengan baik Untuk Anda Agar Tetap Segar Dari Oven</h1>
            <p>kami menggunakan bahan berkualitas yang kami dapatkan langsung dari petani. pendukung kami adalah orang-orang berpengalaman di bidang pangan, sehingga produk yang kami hasilkan terjamin kualitas dan rasanya. sangat lezat, Anda harus mencobanya</p>

            <a href="#" className='read-more'>Baca Selengkapnya</a>
         </div>
         <div className="explore-right">
            <img src="https://images.unsplash.com/photo-1565357253897-79d691886a73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="cookies"  className='images'/>
         </div>
      </div>
   ) 
} 

export default Explore