import user from '@/data/user.json';
import type { PropsWithChildren } from 'react';
import { createContext, useReducer } from 'react';

type Action =
  | { type: 'UPDATE_NAME'; payload: string }
  | { type: 'UPDATE_EMAIL'; payload: string };
interface ProfileContextType {
  state: typeof user;
  dispatch: React.Dispatch<Action>;
}

const defaultUser = user;

const ProfileContext = createContext<ProfileContextType>({
  state: defaultUser,
  dispatch: () => undefined, // No-op default dispatch
});

const profileReducer = (state = defaultUser, action: Action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export const ProfileProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(profileReducer, defaultUser);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
