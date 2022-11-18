import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        borderBottom: '1px solid #832c2c',
        alignItems: 'center',
      }}
    >
      <nav>
        {!isLoggedIn && <Link to="/login">Log in</Link>}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
export default AppBar;
