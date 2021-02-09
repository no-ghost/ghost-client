import './Navbar.scss';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'shards-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from './roleSelectionModalSlice';
import RoleSelectionModal from './RoleSelectionModal';

import './GoogleButton.css';

const isLoggedIn = localStorage.getItem('isLoggedIn');

// TODO: switch active nav based on state
function AppNavbar() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.roleSelectionModalReducer.isOpen);
  const history = useHistory();

  const logout = (
    <div className="logout-button-container">
      <Button>Logout</Button>
    </div>
  );

  const loginAndSignup = (
    <div className="account-controls">
      <ul className="account-controls-list">
        <li className="account-controls-list-item">
          <Button onClick={() => {
            history.push('/login');
          }}
          >
            Log in
          </Button>
        </li>
        <li className="account-controls-list-item">
          <Button
            onClick={() => {
              dispatch(toggleModal());
            }}
          >
            Sign Up
          </Button>
        </li>
      </ul>
    </div>
  );

  return (
    <header>
      <RoleSelectionModal />
      <div className="navbar-container">
        <div className="branding">
          logo
          {open.toString()}
        </div>
        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/faq">How it Works</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        {isLoggedIn ? logout : loginAndSignup}
      </div>
    </header>
  );
}

export default AppNavbar;
