import MyInput from '@/components/ui/MyInput';
import useProfile from '@/hooks/useProfile';

function Profile() {
  const { state, dispatch } = useProfile();
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_NAME', payload: e.target.value });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_EMAIL', payload: e.target.value });
  };

  return (
    <div>
      <h1 className="text-xl mb-4">Profile</h1>
      <div className="mb-4">
        <label htmlFor="name" className="text-gray-500 mb-2 inline-block">
          Name
        </label>
        <MyInput
          type="text"
          id="name"
          value={state.name}
          onChange={handleName}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="text-gray-500 mb-2 inline-block">
          Email
        </label>
        <MyInput
          type="email"
          id="email"
          value={state.email}
          onChange={handleEmail}
        />
      </div>
    </div>
  );
}

export default Profile;
