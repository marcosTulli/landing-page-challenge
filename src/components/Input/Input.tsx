import React, { useEffect, useState, useRef } from 'react';
import { Pokemon } from '../../types';

interface Props {
  pokemons: Pokemon[];
}
const Input: React.FC<Props> = (props: Props) => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e: any) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap?.contains(e.target)) {
      setDisplay(false);
    }
  };

  const setPokedex = (poke: string) => {
    setSearch(poke);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
      <input
        id="auto"
        // onClick={() => setDisplay(!display)}
        placeholder="Type to search"
        value={search}
        onChange={(e) => {
          if (e.target.value.length >= 3) setDisplay(true);
          if (!e.target.value || e.target.value.length < 3) setDisplay(false);
          setSearch(e.target.value);
        }}
      />
      {display && (
        <div
          style={{
            position: 'absolute',
            background: 'white',
            boxShadow: '1px 4px 18px 0px grey',
            borderRadius: 2,
            width: 200,
            maxHeight: 300,
            overflowY: 'scroll',
          }}
        >
          {props.pokemons
            .filter(
              (pokemon: any) => pokemon.name.indexOf(search.toLowerCase()) > -1,
            )
            .map((value: any) => (
              <div
                onClick={() => setPokedex(value.name)}
                className="option"
                key={value.id}
                tabIndex={0}
              >
                <span>{value.name}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Input;
