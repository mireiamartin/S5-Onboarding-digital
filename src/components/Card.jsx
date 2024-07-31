import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Indicator from './Indicador';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardSteps = ({ step, tutorialData, setStep, nextStep, prevStep }) => {
  const bgColor = tutorialData[step].bgColor;

  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <Card className='card-content border-0'>
        <div className='img-content' style={{ backgroundColor: bgColor }}>
          <Card.Img className='card-img pt-2 mt-5' src={tutorialData[step].image} alt={tutorialData[step].title} />
        </div>
        <Card.Body className='card-body'>
          <Card.Title className='card-title my-2 mx-1'>{tutorialData[step].title}</Card.Title>
          <Card.Text className='card-text mx-1 text-black-50'>{tutorialData[step].description}</Card.Text>
          <div className="buttons-content d-flex justify-content-between">
          <Indicator className="indicator" step={step} tutorialData={tutorialData} setStep={(index) => setStep(index)} />
          <div className="button-container">
            {step > 0 ? (
              <Button className='next-button-left mb-3 mx-2' variant="light" onClick={prevStep}>
                <i className="fas fa-arrow-left"></i>
              </Button>
            ) : null}
            {step < tutorialData.length - 1 ? (
              <Button className='next-button-right mb-3 mx-2' variant="dark" onClick={nextStep}>
                <i className="fas fa-arrow-right"></i>
              </Button>
            ) : null}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardSteps;
