import { useDispatch } from 'react-redux';
import { logIn } from 'redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(logIn(form.elements.login.value));
    form.reset();
    navigate('/dashboard', { replace: true });
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: '10px',
        padding: '10px',
      }}
    >
      <input type="text" name="login" />
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};

export default Form;
