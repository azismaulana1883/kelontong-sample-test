import { Link } from 'react-router-dom';

function Button() {
  return (
    <div className="container">
      <div className="row">
        <div className="col ps-lg-5 justify-content-end">
          <Link to="/login">
            <button type="button" className="btn btn-light border border-primary text-primary">Masuk</button>
          </Link>
          <Link to="/register">
            <button type="button" className="btn btn-primary border border-primary text-light">Daftar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Button;
