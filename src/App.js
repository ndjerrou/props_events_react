import { useState, useEffect } from 'react';
import Main from './ui/Main';
import Navbar from './ui/Navbar';

const App = () => {
  const [receivedName, setReceivedName] = useState('');
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    console.log('effect - after mounted');

    async function getPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const pokemon = await response.json();

      console.log(pokemon);
      setPokemon(pokemon);
    }
    console.log('en dehors de la fonction');
    getPokemon();
  }, [receivedName]);

  // cases :

  // 1 - [] --> the effect function fires only for the first mounting

  // 2 - [var1, var2] -->the effect function fires only for the first mounting AND

  // every time the var1, var2 changes

  const onHandleName = name => {
    setReceivedName(name);
  };

  console.log('top level');
  console.log(pokemon);
  return (
    <>
      <Navbar onHandleName={onHandleName} />
      <Main name={receivedName} />
      {pokemon.base_experience}
    </>
  );
};

export default App;
