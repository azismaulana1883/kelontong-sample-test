import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function Button() {
  const username = Cookies.get('username');

  // Fungsi untuk logout
  const handleLogout = () => {
    Cookies.remove('username');
    Cookies.remove('access_token');
    window.location.href = '/';
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col ps-lg-5 justify-content-end">
          {!username && (
            <>
              <Link to="/login">
                <button type="button" className="btn btn-light border border-primary text-primary">Masuk</button>
              </Link>
              <Link to="/register">
                <button type="button" className="btn btn-primary border border-primary text-light">Daftar</button>
              </Link>
            </>
          )}

          {username && (
            <>
              <p>Selamat datang, {username}!</p>
              <button type="button" onClick={handleLogout} className="btn btn-primary">Logout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Button;
