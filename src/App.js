import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header'
import Body from './components/Body'



function App() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=9&orderBy=name`);
      setData(result.data.data)
    };

    fetchData();
  }, [page]);

  if (!data) return null;

  return (
    <>
      <Header />
      <Body data={data} />
      <button onClick={() => {
        setPage(page - 1)
      }}>PREVIOUS</button>
      <button onClick={() => {
        setPage(page + 1)
      }}>NEXT</button>
    </>
  )
}

export default App;
