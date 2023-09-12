import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./Menu.module.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

const NUMBER_OF_COCKTAILS = 5; // Set the number of cocktails you want to display

function Menu() {
  const [loading, setLoading] = useState(true); // Set initial loading to true so the fetching starts immediately
  const [data, setData] = useState<Cocktail[]>([]);

  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  const fetchCocktailHandler = useCallback(() => {
    setLoading(true);
    let fetchedCocktails: Cocktail[] = [];

    const fetchData = async () => {
      while (fetchedCocktails.length < NUMBER_OF_COCKTAILS) {
        try {
          const res = await axios.get(url);
          const cocktail = res.data.drinks[0];

          if (
            !fetchedCocktails.some((item) => item.idDrink === cocktail.idDrink)
          ) {
            fetchedCocktails.push(cocktail);
          }
        } catch (error) {
          console.log(error);
        }
      }
      setData(fetchedCocktails);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    fetchCocktailHandler();
  }, [fetchCocktailHandler]);

  if (loading) {
    return <h2>Just a moment...</h2>;
  }

  return (
    <>
      <h1>Menu</h1>
      <Container className={styles.cocktailbar}>
        {data.map((cocktail) => (
          <div key={cocktail.idDrink}>
            <p className={styles.cocktailNames}>{cocktail.strDrink}</p>
            <Image
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className={styles.cocktailImage}
              rounded
              fluid
            />
          </div>
        ))}
        {/* <Button onClick={fetchCocktailHandler} variant="dark">
          <FontAwesomeIcon icon={faMartiniGlass} />
          Altul
        </Button> */}
      </Container>
    </>
  );
}

export default Menu;
