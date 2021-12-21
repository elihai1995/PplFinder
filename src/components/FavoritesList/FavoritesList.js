import React, { useState, useEffect } from "react";
import Text from "components/Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const FavoritesList = ()=> {
    const [updateFavoriteList, setUpdateFavoriteList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const removeFromFavorite = (user)=>{
      let updateList = updateFavoriteList.filter(function(item){
        return (item !== user);
      })
      setUpdateFavoriteList(updateList);
      localStorage.setItem("favorites", JSON.stringify(updateList));
    };
    
    useEffect(() => { 
      setUpdateFavoriteList(JSON.parse(localStorage.getItem("favorites")));
      setIsLoading(false);
    }, []);
 
    return (
      <S.UserList>
        <S.List>
          {updateFavoriteList?.map((user, index) => {
            return (
              <S.User
                key={index}
                style={{ backgroundColor: "#00874d" }}
              >
                <S.UserPicture src={user?.picture.large} alt="" />
                <S.UserInfo>
                  <Text size="22px" bold>
                    {user?.name.title} {user?.name.first} {user?.name.last}
                  </Text>
                  <Text size="14px">{user?.email}</Text>
                  <Text size="14px">
                    {user?.location.street.number} {user?.location.street.name}
                  </Text>
                  <Text size="14px">
                    {user?.location.city} {user?.location.country}
                  </Text>
                </S.UserInfo>
                <S.IconButtonWrapper isVisible={true} onClick={() => removeFromFavorite(user)}>
                  <IconButton>
                    <FavoriteIcon color="error" />
                  </IconButton>
                </S.IconButtonWrapper>
              </S.User>
            );
          })}
        </S.List>
      </S.UserList>
    );
};

export default FavoritesList;
