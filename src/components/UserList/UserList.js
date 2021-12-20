import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const UserList = ({ users, isLoading, countries, setCountries, handleScroll }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [selectedFavorites, SelectedFavorites] = useState([]);

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const handleCheckCountries = (value) => {
    if (countries.includes(value)) {
      const filterCountries = countries.filter((el) => el !== value);
      return setCountries(filterCountries);
    }
    setCountries([...countries, value]);
  };

  const handleFavorites = (user) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.find((el) => el.email === user.email)) {
      const filterFavorites = favorites.filter((el) => el.email !== user.email);
      SelectedFavorites(filterFavorites);
      localStorage.setItem("favorites", JSON.stringify(filterFavorites));
      return;
    }
    favorites.push(user);
    SelectedFavorites(favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="BR" label="Brazil" onChange={handleCheckCountries} />
        <CheckBox value="AU" label="Australia" onChange={handleCheckCountries} />
        <CheckBox value="CA" label="Canada" onChange={handleCheckCountries} />
        <CheckBox value="DE" label="Germany" onChange={handleCheckCountries} />
        <CheckBox value="NO" label="Norway" onChange={handleCheckCountries} />
      </S.Filters>
      <S.List onScroll={handleScroll}>
        {users.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ backgroundColor: "#007fc9" }}
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
              <S.IconButtonWrapper
                onClick={() => handleFavorites(user)}
                isVisible={
                  index === hoveredUserId ||
                  selectedFavorites.find((el) => el.email === user.email)
                }
              >
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
