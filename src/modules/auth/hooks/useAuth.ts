import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Context AuthContext not loaded.');
  }

  return context;
}
