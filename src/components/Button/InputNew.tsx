import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import styles from './Input.module.css';
import Store from '../../Context/storeContext';

type InputProps = {
  showBtn: () => void;
};

function InputNewBoat({ showBtn } :InputProps) {
  const { register } = useForm();
  const { addNewShip } = useContext(Store);

  function cancel() {
    showBtn();
  }
  function addBoat() {
    showBtn();
    addNewShip('');
  }
  return (
    <div className={ styles.Input }>
      <select id="" { ...register('model') }>
        <option value="260">260</option>
        <option value="380">380</option>
        <option value="480">480</option>
      </select>
      <input
        className={ styles.Input_Current }
        type="number"
        { ...register('current') }
      />
      <input type="date" { ...register('delivery') } />
      <div>
        <button onClick={ cancel }>X</button>
        <button onClick={ addBoat }>ok</button>
      </div>
    </div>
  );
}

export default InputNewBoat;
