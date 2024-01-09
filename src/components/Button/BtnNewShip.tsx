import { useState } from 'react';
import InputNewBoat from './InputNew';

function BtnNewShip() {
  const [showBoat, setShowBoat] = useState(false);
  // const { addNewShip } = useContext(Store);
  const add = () => {
    setShowBoat(!showBoat);
    // addNewShip('teste');
  };

  const newBoat = (
    <button onClick={ () => add() }>
      +New
    </button>
  );

  return (
    <div>
      {showBoat ? <InputNewBoat showBtn={ add } /> : newBoat}
    </div>

  );
}

export default BtnNewShip;
