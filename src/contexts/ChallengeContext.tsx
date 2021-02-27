import { createContext, useState, ReactNode } from 'react';

import challenges from '../../Chellenges.json'
interface ChallangesContextData{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenges: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps){
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp(){
    setLevel(level + 1);
  }

  function startNewChallenges(){
    console.log('Challenges');
  }

  return(
    <ChallangesContext.Provider 
      value={{
        level, 
        currentExperience, 
        challengesCompleted, 
        levelUp,
        startNewChallenges,
      }}
    >
      {children}
    </ChallangesContext.Provider>
  );
}
