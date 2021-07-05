import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Select from './Components/Select'
import Cards from './Components/Cards'
import { Hinge } from 'animate-css-styled-components'

import { Loading, LoadingWrapper } from './styles'

function App() {
  
  const [chars,updateChars] = useState({});
  const [isLoading, updateIsLoading] = useState(true);
  const [error, updateError] = useState('')
  const [selectedChar, setSelectedChar] = useState('');


  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
      .then(response => {
        updateChars(response.data.results);
        updateIsLoading(false);
      })
      .catch(error => {
        updateError(error.message);
        updateIsLoading(false)
      })
  }, [])



  const deleteChar = (event) => {
    const name = event.target.getAttribute("name")
    updateChars(chars.filter(char => char.name !== name))
  }


  if(isLoading){
    return (
      <Hinge duration='1s' delay='0.5s'>
        <LoadingWrapper>
          <Loading> Loading... </Loading>
        </LoadingWrapper>
      </Hinge>
    )

  }

  if(error){
    return <h1> ({error.message}) </h1>
  }
  
  return (
          <>
            <Select chars={chars} updateChars={updateChars} selectedChar={selectedChar} setSelectedChar={setSelectedChar}/>
            <Cards chars={chars} deleteChar={deleteChar} />
          </>
        )
  }

export default App;