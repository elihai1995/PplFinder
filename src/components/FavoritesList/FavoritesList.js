import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core/";
import FavoriteCard from "components/FavoriteCard";

const FavoritesList = () => {
  const [favoritesUsers, setFavoritesUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleFavorites = (userEmail) => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    const filterFavorites = favorites.filter((user) => user.email !== userEmail);
    setFavoritesUsers(filterFavorites);
    localStorage.setItem("favorites", JSON.stringify(filterFavorites));
  };

  useEffect(() => {
    setFavoritesUsers(JSON.parse(localStorage.getItem("favorites")));
    setIsLoading(false);
  }, []);

  return (
    <Container maxWidth={false}>
      <Grid container justify="center" spacing={3}>
        {favoritesUsers?.map((user) => (
            <FavoriteCard
              name={user.name.first}
              lastName={user.name.last}
              img={user.picture.large}
              email={user.email}
              country={user.location.country}
              handleFavorites={handleFavorites}
            />
        ))}
      </Grid>
    </Container>
  );
};

export default FavoritesList;
