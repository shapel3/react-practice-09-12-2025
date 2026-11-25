import { createContext} from 'react';

export const ThemeContext = createContext();

const userAccount = {
    firstName: 'Brat',
    lastName: 'Pitt' ,

}
export const UserAccountContext = createContext(userAccount)