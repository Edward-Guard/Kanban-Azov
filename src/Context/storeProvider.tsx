import { useState } from 'react';
import Store from './storeContext';
import { ShipType } from '../Utils/types';

type StoreProviderProps = {
  children: React.ReactNode;
};

function StoreProvider({ children } : StoreProviderProps) {
  const [Barcos] = useState<ShipType[]>([]);
  const Fila : ShipType[] = [];
  return (
    <Store.Provider value={ { Barcos, Fila } }>
      <div>
        {children}
      </div>
    </Store.Provider>
  );
}

export default StoreProvider;
