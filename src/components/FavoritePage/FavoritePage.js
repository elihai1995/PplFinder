import React from "react";
import {
  Page,
  PageMedia,
  PageContent,
  Typography,
  PageActions,
  IconButton,
} from "@material-ui/core/";
import FavoriteIcon from "@material-ui/icons/Favorite";

const FavoriteCard = ({ name, lastName, email, img, country, handleFavorites }) => {
  return (
    <Page style={{ width: "300px" }}>
      <PageMedia
        component="img"
        alt="user img"
        style={{
          width: "auto",
          margin: "auto",
          borderRadius: "45%",
        }}
        image={img}
        title="user img"
      />
      <PageContent>
        <Typography gutterBottom variant="h5">
          {name} {lastName}
        </Typography>
        <Typography component="p">
          {country}
          <br />
          {email}
        </Typography>
      </PageContent>
      <PageActions>
        <IconButton onClick={() => handleFavorites(email)}>
          <FavoriteIcon color="error" />
        </IconButton>
      </PageActions>
    </Page>
  );
};

export default FavoritePage;