import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import axios from "axios";
import styles from './CocktailBar.module.css'

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

function CocktailBar() {
  const [loading, setLoading] = useState<boolean>(true);
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  useEffect(() => {
    const fetchData = async () => {
      let fetchedCocktails: Cocktail[] = [];

      while (fetchedCocktails.length < 5) {

        try {
          const res = await axios.get(url);

          const cocktail = res.data.drinks[0] as Cocktail;

          fetchedCocktails.push(cocktail);

        } catch (error) {
          console.error(error);
        }
      }

      setCocktails(fetchedCocktails);
      setLoading(false);

    };
    fetchData();
  }, []);

  if (loading) {

    return <div>Loading...</div>;
  }


  return (
    <Container fluid className={styles.cocktailContainer}>

      <Row className={`justify-content-center ${styles.cocktailBarRow}`}>

        {cocktails.map((cocktail) => (

          <Col key={cocktail.strDrink} md={2} sm={2} xs={2}>

            <Card className={styles.cocktailCard}>

              <Card.Img variant="top" src={cocktail.strDrinkThumb} className={styles.cocktailImage} />

              <Card.Body className={styles.cocktailName}>
                <Card.Title className={styles.cardTitle}>{cocktail.strDrink}</Card.Title>
              </Card.Body>

            </Card>

          </Col>
        ))}
      </Row>

    </Container>
  );
};


export default CocktailBar;