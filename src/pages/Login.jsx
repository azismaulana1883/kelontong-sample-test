import { useEffect } from 'react'
import '../assets/css/landing-page.css'
import { Link } from 'react-router-dom';

function Login() {
useEffect(() => {
  document.title = 'Login';
}, []);
  return (
    <>
        <div className="container vh-100">
        <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-4 col-sm-12 col-md-12">
        <section className="section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-primary fw-bold text-decoration-none pt-5">
              <Link to="/">
                <a>Kelontong</a>
              </Link>
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-start pb-3">
          <div className="col">
            <a href="" className="text-primary active">Customer</a>
            <a href="" className="text-black">Owner</a>
          </div>
        </div>
      </div>
      <form action="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  required={true}
                />
              </div>
              <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Your Password"
                    minLength="8"
                    maxLength="8"
                    required={true}
                />
                </div>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="form-check pb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        checked
                      />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        Remember Me
                      </label>
                      <a className="float-end" href="forgot-password.html"
                        >Lupa Password?</a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" id="btn_submit">
                Masuk
              </button>
            </div>
          </div>
          <div className="container">
            <div className="row pt-3">
              <div className="col-12 text-center">
                <p>Belum punya akun?<a href="register.html">Daftar</a></p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login