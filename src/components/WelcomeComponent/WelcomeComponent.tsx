import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./WelcomeComponent.module.css";
import { autumnMessage, winterMessage, summerMessage, springMessage, championshipSeasonMessage } from "./WelcomeMessages"
import { useEffect, useState } from "react";

function WelcomeComponent() {
  const [currentMessage, setCurrentMessage] = useState(autumnMessage);

  useEffect(() => {
    const updateMessage = () => {
      const currentDate = new Date();
      const month = currentDate.getMonth();


      if (month >= 2 && month <= 4) {
        setCurrentMessage(springMessage);
      } else if (month >= 5 && month <= 7) {
        setCurrentMessage(summerMessage);
      } else if (month >= 8 && month <= 10) {
        setCurrentMessage(autumnMessage);
      } else {
        setCurrentMessage(winterMessage);
      }


      const championshipSeasonStartDate = new Date('2025-09-01');
      const priorToPostDays = 7;
      const championshipTimeAccounting = championshipSeasonStartDate.getTime() - currentDate.getTime();
      const daysUntilChampionship = Math.ceil(championshipTimeAccounting / (1000 * 3600 * 24));

      if (Math.abs(daysUntilChampionship) <= priorToPostDays) {
        setCurrentMessage(championshipSeasonMessage);
      }
    };

    updateMessage();
    const timer = setInterval(updateMessage, 1000 * 60 * 60 * 24);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container className={`p-4 ${styles.welcomeComponentContainer}`}>
      <Row className="text-center">
        <Col xs={12}>
          <h2 className="display-4">{currentMessage.shortMessage}</h2>
        </Col>
        <hr className={styles.welcomeComponentHr} />
        <Col xs={12}>
          <p className="lead">{currentMessage.longMessage}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default WelcomeComponent;