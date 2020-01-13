import React from 'react';
import '../assets/styles/components/search.scss';

const Search = () => {
  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        className='main__input main__input--search'
        type='text'
        name='search'
        placeholder='Buscar...'
      />
    </section>
  );
};

export default Search;
