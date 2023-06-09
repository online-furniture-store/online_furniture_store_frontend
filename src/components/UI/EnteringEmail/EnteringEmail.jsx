import { useState } from 'react';
import styles from './EnteringEmail.module.css';

function EnteringEmail() {
  const [email, setEmail] = useState();
  const handleChange = (evt) => {
    setEmail(evt.target.value);
  };
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        id="email"
        type="email"
        autoComplete="email"
        value={email || ''}
        onChange={handleChange}
        placeholder="Email"
      />
      <div className={styles.item} />
    </div>
  );
}

export default EnteringEmail;
