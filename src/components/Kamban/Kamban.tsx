import { useContext } from 'react';
import BtnNewShip from '../Button/BtnNewShip';
import ListCards from '../Lists/ListCards';
import styles from './kamban.module.css';
import Store from '../../Context/storeContext';
import BoatCard from '../Cards/BoatCard';
import InputNewBoat from '../Button/InputNew';

function Kamban() {
  const { Boats } = useContext(Store);
  return (
    <div className={ styles.container }>
      <ListCards title="Barcos">
        <BtnNewShip />
        <InputNewBoat />
        {Boats.map((Boat) => <BoatCard Card={ Boat } key={ Boat.id } />)}
      </ListCards>
      <ListCards title="Fila">
        Fila
      </ListCards>
      <ListCards title="Andamento">
        Andamento
      </ListCards>
      <ListCards title="Interrompido">
        Interrompido
      </ListCards>
      <ListCards title="Entregue">
        Entregue
      </ListCards>
    </div>
  );
}

export default Kamban;
