import { useForm } from 'react-hook-form';
import styles from './Input.module.css';

function InputNewBoat() {
  const { register, getValues } = useForm();
  function addBoat() {
    console.log(getValues());
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
        <button>X</button>
        <button onClick={ addBoat }>ok</button>
      </div>
    </div>
  );
}

export default InputNewBoat;
