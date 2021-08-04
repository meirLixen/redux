import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import counterSlice from './counterSlice';
import styles from './Counter.module.css';

export function Counter () {
  const { decrement, increment, all } = counterSlice.actions;
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>
          {useSelector((state) => state.counter.value)}
        </span>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div>

        {useSelector((state) => state.counter.blablabla)}

      </div>
      <input onChange={(e) => {
        dispatch(all(e.target.value));
      }}
      />
    </div>
  );
}
