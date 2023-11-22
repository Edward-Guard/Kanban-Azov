import { createContext } from 'react';
import { ShipType } from '../Utils/types';

type StoreContextType = {
  Boats: ShipType[]
  Fila: ShipType[]
  addNewShip: (param : string) => void
};

const Store = createContext({} as StoreContextType);

export default Store;
