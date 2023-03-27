import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setdata } from '../store/cardSlice';

const Navbar = () => {
  const cardstate = useSelector((state) => state.card);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const SearchInput = (e) => {
    setQuery(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    const cards = cardstate.filter((item) => item.video === query);
    dispatch(setdata(cards));
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2" to="/">Convin</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse fs-4" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/cards">List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/newcard">New Card</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={SearchInput}
            />
            <button className="btn btn-outline-success" type="submit" onClick={searchHandler}>Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
