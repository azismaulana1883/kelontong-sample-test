import imgRiset from '../assets/img/riset.png'
import imgToko from '../assets/img/toko.png'

function About() {
  return (
    <>
      <section className="wrapper-about">
        <div className="container-fluid">
          <div className="row pt-5 ps-5">
            <div className="col-sm-6 image-about">
              <img src={imgRiset} alt="Description of the Image" className="img-fluid" />
            </div>
            <div className="col-sm-6 text-about">
              <h2>Mempermudah kamu mengelola tokomu!</h2>
              <p>Kelontong membantumu mengelola tokomu mulai dari ringkasan penjualan hingga mengedit produk penjualan hanya dengan 1 klik.</p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row pt-5 ps-5">
            <div className="col-sm-6 text-about">
              <h2>Kelontong memberikanmu pengalaman belanja yang mudah 24 jam</h2>
              <p>tanpa perlu antri dan jaminan 1 jam sampai.</p>
            </div>
            <div className="col-sm-6 image-about align-items-end">
              <img src={imgToko} alt="Description of the Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
