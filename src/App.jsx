import { useState } from 'react'
import CardSteps from './components/Card';
import meditation from './assets/meditation.svg';
import programming from './assets/programming.svg';
import time from './assets/time_managment.svg';


function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < 2){
      setStep(prev => prev + 1)
    } 
  };

  const prevStep = () => {
    if (step > 0)
      setStep(prev => prev - 1)

  }

  const tutorialData = [{
    title: 'Dedica moltes hores',
    description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
    bgColor: '#63a0a8',
    image: time
  },
  {
    title: 'Programa projectes propis',
    description: 'Més val 10 hores treballant en projectes propis, que he 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge',
    bgColor: "#d3d4d9",
    image: programming
  },
  {
    title: 'Procura descansar',
    description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
    bgColor: "#f9d278",
    image: meditation
  }];

  return (
    <div className="container">
    <CardSteps 
      step={step}
      tutorialData={tutorialData}
      nextStep={nextStep}
      prevStep={prevStep}
      setStep={setStep}
    />
  </div>
  
  )
}

export default App
