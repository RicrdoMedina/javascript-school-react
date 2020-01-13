import React from 'react';
import '../assets/styles/components/carouselItem.scss';
import PropTypes from 'prop-types';
import playIcon from '../assets/static/play-icon.svg';
import plusIcon from '../assets/static/plus-icon.svg';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__details--icon'
            src={playIcon}
            alt='Play'
          />
          <img
            className='carousel-item__details--icon'
            src={plusIcon}
            alt='Plus'
          />
        </div>
        <h3 className='carousel-item__details--title'>{title}</h3>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
