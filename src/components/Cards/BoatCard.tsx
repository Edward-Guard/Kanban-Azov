import { ShipType } from '../../Utils/types';
import styles from './Card.module.css';

type CardProps = {
  Card : ShipType
};

function rmBoat() {
  console.log('Remove');
}
function mvFila() {
  console.log('Fila');
}

function BoatCard({ Card } : CardProps) {
  const { id, Conclusao } = Card;
  const estado = Conclusao * 100;
  return (
    <div className={ styles.Card }>
      <button onClick={ rmBoat }>X</button>
      <div>{id}</div>
      <div>{`${estado}%`}</div>
      <button onClick={ mvFila }>{'>'}</button>
    </div>
  );
}

export default BoatCard;
