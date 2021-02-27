import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallendBox.module.css';

export function ChallendBox(){

  const contextData = useContext(ChallangesContext);
  
  const hasActiveChange = true;

  return(
    <div className={styles.challengeBoxContainer}>
      {hasActiveChange ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg"/>
            <strong>Novo Desafio</strong>
            <p>Levante e faca uma caminhada</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
            
            >
              Falhei
            </button>

            <button
            type="button"
            className={styles.challengeSuccessButton}
            >
              Completei
            </button>
          </footer>
        </div>

      ) : (
      <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando desafios.
        </p>
      </div>
      )}
    </div>
  );
}