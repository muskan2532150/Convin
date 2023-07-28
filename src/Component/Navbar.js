import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../assets/Navbar.css';

const Navbar = () => {
  const [query, setQuery] = useState('');

  const SearchInput = (e) => {
    setQuery(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-lg-5">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2" to="/">LOGO</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse fs-4 " id="navbarSupportedContent">
          <div className="d-flex align-items-center justify-content-center flex-grow-1">
            <form className="d-flex mobile-search" role="search">
              <input
                className="form-control me-lg-2 srinput"
                type="search"
                placeholder="Search for your favorite groups in ATG"
                aria-label="Search"
                value={query}
                onChange={SearchInput}
              />
              <div className="d-flex align-items-center">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={searchHandler}>Search</button>
              </div>
            </form>
          </div>
          <div className="mobile-signup">
            <p className="d-flex align-items-center fs-3">
              create account.
              <span>
                <Link to="/signup"> Its free!</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
