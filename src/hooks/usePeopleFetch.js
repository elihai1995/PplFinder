import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countriesToFetch, setCountriesToFetch] = useState();
  const [pageToFetch, setPageToFetch] = useState(1);

  useEffect(() => {
    if (countriesToFetch) {
      fetchUsers(countriesToFetch);
    }
  }, [countriesToFetch, pageToFetch]);

  async function fetchUsers() {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://randomuser.me/api/?results=10&${pageToFetch}&nat=${countriesToFetch.toString()}`
    );
    setUsers((prev) => [...prev, ...data.results]);
    setIsLoading(false);
  }

  return { users, isLoading, fetchUsers, setCountriesToFetch, setPageToFetch, setUsers };
};
