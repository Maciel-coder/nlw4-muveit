import styles from '../styles/components/Profile.module.css';


export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img  src="https://avatars.githubusercontent.com/u/57802784?s=460&u=c81b6e7fa1b91d2764f4ad25d127cea61a01f9ec&v=4" alt="Maciel-coder"/>

      <div>
        <strong>Maciel Rodrigues</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          level 1
        </p>
      </div>
    </div>
  );
}