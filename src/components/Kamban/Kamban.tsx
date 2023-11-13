import ListCards from '../ListCards';
import styles from './kamban.module.css';

function Kamban() {
  return (
    <div className={ styles.container }>
      <ListCards title="Barcos" />
      <ListCards title="Fila" />
      <ListCards title="Andamento" />
      <ListCards title="Interrompido" />
      <ListCards title="Entregue" />
    </div>
  );
}

export default Kamban;
