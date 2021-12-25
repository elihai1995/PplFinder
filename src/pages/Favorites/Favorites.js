import React, { useState } from "react";
import Text from "components/Text";
import FavoritesList from "components/FavoritesList";
import * as S from "./style";

const Favorites = () => {
    const [favoritesList] = useState([]);
  
    return (
     <S.Favorites>
       <S.Content style={{ backgroundColor: "#007fc9" }}>
          <S.Header>
              <Text size="64px" bold>
                My Favorites
              </Text>    
          </S.Header>
          <FavoritesList favoritesUsersList={favoritesList} />
        </S.Content>
     </S.Favorites>
    );
};

export default Favorites;