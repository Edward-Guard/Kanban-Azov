import { createContext } from 'react';
import { ShipType } from '../Utils/types';

type StoreContextType = {
  Barcos: ShipType[]
  Fila: ShipType[]
};

const Store = createContext({} as StoreContextType);

export default Store;
