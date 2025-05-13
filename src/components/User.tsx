import useProfile from '@/hooks/useProfile';
import { Link } from 'react-router';

function User() {
  const { state } = useProfile();
  return (
    <>
      <Link to="/user" className="text-blue-500 hover:underline">
        {state.name}
      </Link>
      <p>{state.email}</p>
    </>
  );
}

export default User;
