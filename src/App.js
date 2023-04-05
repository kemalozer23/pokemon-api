import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header'
import Body from './components/Body'
import Pagination from './components/Pagination';

import { Select, Option } from "@material-tailwind/react";



function App() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const [superTypes, setSuperTypes] = useState([]);
  const [types, setTypes] = useState([]);

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
      const result = await axios.get(url).catch(error => console.error(error));
      setData(result.data.data)
    };

    fetchData();
  }, [page, superType, type]);

  useEffect(() => {
    const fetchData = async () => {
      const superTypesUrl = 'https://api.pokemontcg.io/v2/supertypes'
      const typesUrl = 'https://api.pokemontcg.io/v2/types'
      const superTypesResult = await axios.get(superTypesUrl).catch(error => console.log(error))
      const typesResult = await axios.get(typesUrl).catch(error => console.log(error))
      setSuperTypes(superTypesResult.data.data)
      setTypes(typesResult.data.data)
    }

    fetchData();
  }, [])

  if (!data) return null;

  return (
    <>
      <Header />
      <div className='border p-5 bg-gray-100 flex justify-center items-center'>
        <div className='grid grid-cols-2 pt-5 space-x-5'>
          <div className="w-1/4">
            <Select label="Supertype" value={superType} onChange={(value) => setSuperType(value)}>
              {superTypes.map(i => (
                <Option key={i} value={i}>{i}</Option>
              ))}
            </Select>
          </div>

          <div className="w-1/4">
            <Select label="Type" value={type} onChange={(value) => setType(value)}>
              {types.map(i => (
                <Option key={i} value={i}>{i}</Option>
              ))}
            </Select>
          </div>
        </div>
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
