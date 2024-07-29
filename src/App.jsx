import { useState } from 'react'
import Card from './components/Card';

function App() {
  const [step, setStep] = useState(0)

  const tutorialData = [{
    title: 'Dedica moltes hores',
    description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
    bgColor: "white",
    image: "image"
  },
  {
    title: 'Programa projectes propis',
    description: 'Més val 10 hores treballant en projectes propis, que he 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge',
    bgColor: "white",
    image: "image"
  },
  {
    title: 'Procura descansar',
    description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
    bgColor: "white",
    image: "image"
  }];

  return (
    <>
      <Card 
        step = {step}
        tutorialData = {tutorialData}
      />
    </>
  )
}

export default App
