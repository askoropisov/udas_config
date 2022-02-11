import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import Button from 'react-bootstrap/Button'
import Calibration from '../../components/calibration/Calibration';


export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState('5');

  const [state, setState] = useState(0)

  const incrementValue = Number(incrementAmount) || 0;


  function onChange(e) {
    setIncrementAmount(e.target.value)
  }

  const testFucntion = () => {
    console.log("testFucntion:", incrementAmount)
  }



  return (
    <div>
      <Calibration id={1} qwe={testFucntion} test={1} keys="2" />

      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        > - </button>


        <span className={styles.value}>{count}</span>

        
          {/* <Button
            onClick={() => dispatch(increment())}
            disabled={count < 5}
          > + </Button> */}
          
          <button
            className={styles.button}
            onClick={() => dispatch(increment())}
          > + </button>


      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={onChange}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div >
  );
}


