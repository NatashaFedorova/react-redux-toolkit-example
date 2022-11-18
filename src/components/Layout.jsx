import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';

const Layout = () => {
  return (
    <div style={{ width: '1200px', margin: '0 auto' }}>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
