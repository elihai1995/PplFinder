import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@material-ui/core/";
import FavoriteIcon from "@material-ui/icons/Favorite";

const FavoriteCard = ({ name, lastName, email, country, img, handleFavorites }) => {
  return (
    <Card style={{ width: "260px", textAlign: "center", backgroundColor: "#cbdcfa", color: "black" }}> <br />
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
          {email}
          <br />
          {country}
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
