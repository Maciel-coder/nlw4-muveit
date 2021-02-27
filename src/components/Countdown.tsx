import { useContext, useEffect, useState } from 'react';
import { ChallangesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Countdown.module.css';

let countDownTimeOut: NodeJS.Timeout;

export function Countdown() {

  const { startNewChallenges } = useContext(ChallangesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIstActive] = useState(false);

  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuLeft, minuRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIstActive(true);

  }
  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIstActive(false);
      startNewChallenges();

    }
  }, [isActive, time]);

  function resetCountdown() {
    clearTimeout(countDownTimeOut);
    setIstActive(false);
    setTime(23 * 60);
  }

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuLeft}</span>
          <span>{minuRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>


      {hasFinished ? ( //condition ternaria que verifica se coutDown chegou a 0 e exibe o botao ciclo e 
        <button
          disabled
          className={styles.countDownButton}

        >
          Ciclo Encerrado
        </button> //div butão - ciclo encerrado
      ) : (
          <>
            { isActive ? (
              <button
                type="button"
                className={`${styles.countDownButton} ${styles.countDownButtonActive} ${styles.countDownButton}`}
                onClick={resetCountdown}
              >
                Abandonar ciclo
              </button>
            ) : (

                <button
                  type="button"
                  className={styles.countDownButton}
                  onClick={startCountdown}
                >
                  Iniciar um ciclo
                </button>
              )}
          </>
        )
      }

    </div>
  );
}
