import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header'
import Body from './components/Body'
import Pagination from './components/Pagination';



function App() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const nextPage = (page) => {
    setPage(page + 1);
  }

  const previousPage = (page) => {
    setPage(page - 1);
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.pokemontcg.io/v2/cards?supertype=Pokémon&page=${page}&pageSize=9&orderBy=name`);
      setData(result.data.data)
    };

    fetchData();
  }, [page]);

  if (!data) return null;

  return (
    <>
      <Header />
      <Pagination 
        nextPage={nextPage}
        previousPage={previousPage}
        page={page}
      />
      <Body data={data} />
    </>
  )
}

export default App;
