import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/userSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.user.login);
  console.log(login);

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <p>{login}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};
export default UserMenu;
