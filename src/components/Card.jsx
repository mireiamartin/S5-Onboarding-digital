import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardSteps = ({ step, tutorialData, nextStep }) => {
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
          <Button className='next-button mb-3 mx-2' variant="dark" onClick={nextStep}><i className="fas fa-arrow-right"></i></Button>
        </Card.Body>
      </Card>
    </div>
  );
};



export default CardSteps;
