import React, { useEffect, useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const { users, isLoading, setCountriesToFetch, setPageToFetch, setUsers } =
    usePeopleFetch();

  useEffect(() => {
    setPageToFetch(1);
    setUsers([]);
    setCountriesToFetch(countries);
  }, [countries]);

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList
          users={users}
          isLoading={isLoading}
          countries={countries}
          setCountries={setCountries}
        />
      </S.Content>
    </S.Home>
  );
};

export default Home;
