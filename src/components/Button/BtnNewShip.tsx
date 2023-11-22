import { useContext } from 'react';
import Store from '../../Context/storeContext';

function BtnNewShip() {
  const { addNewShip } = useContext(Store);
  function add() {
    addNewShip('teste');
  }

  return (
    <button onClick={ () => add() }>
      + New
    </button>
  );
}

export default BtnNewShip;
