const Card = ({step, tutorialData}) => {
    return (
      <>
        <img src={tutorialData[step].image} alt={tutorialData[step].title} className="card-image"/>
        <div className="card-content">
          <h2 className="card-title">{tutorialData[step].title}</h2>
          <p className="card-description">{tutorialData[step].description}</p>
        </div>
      </>
    )
  };
  
export default Card;