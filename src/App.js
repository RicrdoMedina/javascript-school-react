import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';
import Footer from './components/Footer';
import useInitialState from '../hooks/useInitialState';
import './assets/styles/App.scss';

const API = 'http://localhost:8080/initialState.json';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const videos = useInitialState(setIsLoading, API);

  const renderCarousel = () => {
    if (videos.length === 0) {
      return <></>;
    }

    const {
      initialState: { myList, originals, trends },
    } = videos;

    const renderCarouselItem = (data) => data.map((item) => <CarouselItem key={item.id} {...item} />);

    return (
      <>
        {myList && (
          <Categories title='Mi Lista'>
            <Carousel>{renderCarouselItem(myList)}</Carousel>
          </Categories>
        )}
        {trends && (
          <Categories title='Tendencias'>
            <Carousel>{renderCarouselItem(trends)}</Carousel>
          </Categories>
        )}
        {originals && (
          <Categories title='Originales'>
            <Carousel>{renderCarouselItem(originals)}</Carousel>
          </Categories>
        )}
      </>
    );
  };

  return (
    <div className='wrapper theme--purple'>
      <Header />
      <Search />
      {isLoading && 'Loading'}
      {renderCarousel()}
      <Footer />
    </div>
  );
};

export default App;
