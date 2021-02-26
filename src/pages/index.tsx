
import React from 'react';
import Head  from 'next/head';
import { CompletedChalanges } from '../components/CompletedChalanges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import  styles  from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
     
     <Head>
       <title>Inicio | move.it</title>
     </Head>

    <ExperienceBar />
    
    <section>
      <div>
        <div>
        <Profile />
        <CompletedChalanges />
        <Countdown />
        </div>
      </div>
    </section>
  </div>
  )
}
