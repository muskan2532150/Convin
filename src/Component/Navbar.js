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
    <nav className="navbar navbar-expand-lg bg-body-tertiary custom-nav">
      <div className="container-fluid">
        <div>
          <Link className="navbar-brand fs-2" to="/">LOGO</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="collapse navbar-collapse fs-4 justify-content-around" id="navbarSupportedContent" >
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 srinput"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
              value={query}
              onChange={SearchInput}
            />
            <button className="btn btn-outline-success" type="submit" onClick={searchHandler}>Search</button>
          </form>
          <p>
          create account.
          <span>
            <button type="button" className="btn text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Its free!
            </button>
          </span>
        </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
