import React from "react";
import FavoritesList from "components/FavoritesList";
import Text from "components/Text";
import * as S from "./style";

const Favorites = () => {
  return (
    <>
      <S.Content>
        <Text size="64px" bold>
          My Favorites
        </Text> <br />
      </S.Content>
      <FavoritesList />
    </>
  );
};

export default Favorites;
