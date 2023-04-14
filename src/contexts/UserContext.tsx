import { IUser } from 'interfaces/IUser';
import { ReactNode, createContext, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const UserContext = createContext<IUser[] | null>();

interface UserProviderProps {
  value: IUser[] | null;
  children: ReactNode;
}

export const UserProvider = ({ value, children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const value = useContext(UserContext);

  return value;
};
