import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core/";
import FavoriteIcon from "@material-ui/icons/Favorite";

const FavoriteCard = ({ name, lastName, email, img, country, handleFavorites }) => {
  return (
    <Card style={{ width: "300px" }}>
      <CardMedia
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
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name} {lastName}
        </Typography>
        <Typography component="p">
          {country}
          <br />
          {email}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => handleFavorites(email)}>
          <FavoriteIcon color="error" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default FavoriteCard;