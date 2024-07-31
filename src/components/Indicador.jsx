import styled from "styled-components";

const IndicatorSmallBall = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #d1d1d1;
  cursor: pointer;
`;

const IndicatorLargeBall = styled.div`
  width: 14px;
  height: 6px;
  border-radius: 40%;
  background-color: #171717;
  cursor: pointer;
`;

const Indicator = ({ step, tutorialData, setStep }) => {
  return (
    <div className="container_indicators d-flex mx-1 mb-2 gap-2 align-items-center">
      {tutorialData.map((data, index) => {
        if (index === step) {
          return (
            <IndicatorLargeBall
              key={data.title}
              onClick={() => setStep(index)}
            />
          );
        }
        return (
          <IndicatorSmallBall key={data.title} onClick={() => setStep(index)} />
        );
      })}
    </div>
  );
};

export default Indicator;
