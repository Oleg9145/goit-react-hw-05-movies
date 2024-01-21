import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Сторінку не знайдено</h1>
      <Link to="/">Повернутися на головну сторінку</Link>
    </div>
  );
};

export { NotFound };
