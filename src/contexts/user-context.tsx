'use client'

import { createContext, SetStateAction, useContext, useState } from "react";
import { User } from "../types/user";

type UserContextValues = {
  userState : User | null;
  setUser : React.Dispatch<SetStateAction<User | null>>
}
const UserContext = createContext<UserContextValues | null>(null)

export function UserContextProvider({ children, user }: { children: React.ReactNode, user : User | null }) {
  const [userState, setUser] = useState<User | null>(user);
  return (
    <UserContext.Provider value={{
      userState,
      setUser
    }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser(){
  const response = useContext(UserContext);
  return response;
}