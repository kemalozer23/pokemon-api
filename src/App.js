import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header'
import Body from './components/Body'
import Pagination from './components/Pagination';

import { Select, Option } from "@material-tailwind/react";



function App() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const [superType, setSuperType] = useState('Pokemon');
  const [type, setType] = useState('Water');

  const nextPage = (page) => {
    setPage(page + 1);
  }

  const previousPage = (page) => {
    setPage(page - 1);
  }

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=9&orderBy=name&q=supertype:${superType} types:${type}`
      console.log(url);
      const result = await axios.get(url).catch(error => console.error(error));
      setData(result.data.data)
    };

    fetchData();
  }, [page, superType, type]);

  if (!data) return null;

  return (
    <>
      <Header />

      <div className="w-1/4">
        <Select label="Supertype" value={superType} onChange={(value) => setSuperType(value)}>
          <Option value='Energy'>Energy</Option>
          <Option value='Pokemon'>Pokemon</Option>
          <Option value='Trainer'>Trainer</Option>
        </Select>
      </div>

      <div className="w-1/4 pt-5">
        <Select label="Type" value={type} onChange={(value) => setType(value)}>
          <Option value='Colorless'>Colorless</Option>
          <Option value='Darkness'>Darkness</Option>
          <Option value='Dragon'>Dragon</Option>
          <Option value='Fairy'>Fairy</Option>
          <Option value='Fighting'>Fighting</Option>
          <Option value='Fire'>Fire</Option>
          <Option value='Grass'>Grass</Option>
          <Option value='Lightning'>Lightning</Option>
          <Option value='Metal'>Metal</Option>
          <Option value='Psychic'>Psychic</Option>
          <Option value='Water'>Water</Option>
        </Select>
      </div>

      <Body data={data} />

      <Pagination 
        nextPage={nextPage}
        previousPage={previousPage}
        page={page}
      />
    </>
  )
}

export default App;
