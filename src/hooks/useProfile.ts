import ProfileContext from '@/contexts/profileContext';
import { useContext } from 'react';

export default function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
