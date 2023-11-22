import { useState } from 'react';
import Store from './storeContext';
import { ShipType } from '../Utils/types';
import shipMock from '../Utils/mock';

type StoreProviderProps = {
  children: React.ReactNode;
};

function StoreProvider({ children } : StoreProviderProps) {
  const [Boats, setBoats] = useState<ShipType[]>([]);
  const Fila : ShipType[] = [];

  const addNewShip = () => {
    const newList = [...Boats, shipMock];
    setBoats(newList);
  };

  return (
    <Store.Provider value={ { Boats, Fila, addNewShip } }>
      <div>
        {children}
      </div>
    </Store.Provider>
  );
}

export default StoreProvider;
