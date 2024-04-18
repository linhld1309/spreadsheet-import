"use client"
import React, { useState, createContext, useContext, useEffect } from 'react';
import {
  onAuthStateChanged,
  getAuth,
} from 'firebase/auth';
import firebase_app from '@/firebaseConfig';
import { User } from "@/src/app/types"

const auth = getAuth(firebase_app);

type Props<T extends string> = {
  children: any
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = <T extends string>({ children }: Props<T>) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user as unknown as User);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}
