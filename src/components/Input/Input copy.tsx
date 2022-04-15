import React, { useEffect, useState, useRef } from 'react';
// interface PokemonFormResponse {
//   name: string;
// }
const Input = () => {
  // const [display, setDisplay] = useState(false);
  // const [options, setOptions] = useState<PokemonFormResponse[]>([]);
  // const [search, setSearch] = useState('');
  // const wrapperRef = useRef<any>(null);

  // useEffect(() => {
  //   const pokemon: any = [];
  //   const promises = new Array(200)
  //     .fill( _x:undefined)
  //     .map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
  //   Promise.all(promises).then((pokemonArr) => {
  //     return pokemonArr.map((value) =>
  //       value.json().then(({ name }) => pokemon.push({ name }))
  //     );
  //   });
  //   setOptions(pokemon);
  // }, []);

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);
  // const handleClickOutside = (e: any) => {
  //   const { current: wrap } = wrapperRef;
  //   if (wrap && !wrap?.contains(e.target)) {
  //     setDisplay(false);
  //   }
  // };

  // const setPokedex = (poke: any) => {
  //   setSearch(poke);
  //   setDisplay(false);
  // };

  return (
    <div>
      {/* <div ref={wrapperRef} className='flex-container flex-column pos-rel'> */}
      {/* <input
        id='auto'
        onClick={() => setDisplay(!display)}
        placeholder='Type to search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {display && (
        <div className='autoContainer'>
          {options
            .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => setPokedex(value.name)}
                  className='option'
                  key={i}
                  tabIndex={0}>
                  <span>{value.name}</span>
                </div>
              );
            })}
        </div>
      )} */}
    </div>
  );
};

export default Input;
