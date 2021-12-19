import React, { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core/";
import FavoritePage from "components/FavoritePage";
import Spinner from "components/Spinner";

const FavoritesList = () => {
  const [favoritesUsers, setFavoritesUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFavoritesUsers(JSON.parse(localStorage.getItem("favorites")));
    setIsLoading(false);
  }, []);

  const handleFavorites = (userEmail) => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    const filterFavorites = favorites.filter((user) => user.email !== userEmail);
    setFavoritesUsers(filterFavorites);
    localStorage.setItem("favorites", JSON.stringify(filterFavorites));
  };

  return (
    <Container maxWidth={false}>
      <Grid container justify="center" spacing={3}>
        {isLoading && (
          <Grid item>
            <Spinner />
          </Grid>
        )}
        {favoritesUsers?.map((user) => (
          <Grid item key={user.email}>
            <FavoritePage
              name={user.name.first}
              lastName={user.name.last}
              img={user.picture.large}
              country={user.location.country}
              email={user.email}
              handleFavorites={handleFavorites}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FavoritesList;