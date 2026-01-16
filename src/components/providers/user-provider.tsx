'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';
import type { User } from '@/lib/types';

export const UserContext = createContext<{ user: User | null; loading: boolean }>({
  user: null,
  loading: true,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you'd fetch the user from your auth provider (e.g., Firebase)
    // For now, we'll simulate a logged-in premium user.
    const mockUser: User = {
      uid: '12345',
      email: 'premium.user@airobreath.com',
      displayName: 'Premium User',
      photoURL: null,
      accountType: 'Premium Pro',
    };

    setTimeout(() => {
      setUser(mockUser);
      setLoading(false);
    }, 1000); // Simulate loading delay
  }, []);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};
