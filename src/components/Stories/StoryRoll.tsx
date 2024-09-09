import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { storyText } from "./stories";
import styles from './StoryRoll.module.css';

function StoryRoll() {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showContinue, setShowContinue] = useState(false);
  const totalChapters = storyText.length;

  useEffect(() => {
    setDisplayText(storyText[currentParagraph].slice(0, 150) + '...');
    setShowContinue(true);
  }, [currentParagraph]);

  const continueReading = () => {
    setDisplayText(storyText[currentParagraph]);
    setShowContinue(false);
  };

  const nextParagraph = () => {
    setCurrentParagraph((prev) => (prev + 1) % totalChapters);
  };

  return (
    <Container className={`${styles.container} my-5`}>
      <Row>
        <Col md={8} className="mx-auto">
          <h1 className={`${styles.title} text-center mb-4`}>Despre Noi</h1>

          <span className={styles.chapterNumber}>
            <span className={styles.chapterWord}>Chapter</span>  {currentParagraph + 1}/{totalChapters}
          </span>

          <p className={`${styles.paragraph} mb-4`}>{displayText}</p>

          {showContinue && (
            <Button
              variant="link"
              onClick={continueReading}
              className={styles.continueLink}
            >
              Continue reading...
            </Button>
          )}

          <div className={styles.buttonContainer}>

            <Button
              variant="dark outline-primary"
              onClick={nextParagraph}
              className={styles.button}
            >
              Next Chapter
            </Button>

          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default StoryRoll;