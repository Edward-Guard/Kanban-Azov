import styles from './Input.module.css';

function InputNewBoat() {
  return (
    <div className={ styles.Input }>
      <select name="model" id="">
        <option value="260">260</option>
        <option value="380">380</option>
        <option value="480">480</option>
      </select>
      <label className={ styles.Label_Current } htmlFor="numberBoat">
        Num:
        <input
          className={ styles.Input_Current }
          type="number"
          name="current"
          id="numberBoat"
        />
      </label>
      <div>Adcionais</div>
      <label htmlFor="delivery-date">
        Prazo:
        <input type="date" name="" id="delivery-date" />
      </label>
    </div>
  );
}

export default InputNewBoat;
