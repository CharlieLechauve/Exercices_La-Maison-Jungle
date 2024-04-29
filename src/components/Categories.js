import React from 'react';
import '../styles/Categories.css';

function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className='lmj-categories'>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`button ${activeCategory === cat ? 'active' : ''}`}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}
      <button
        className='button'
        onClick={() => setActiveCategory('')}
      >
        All
      </button>
    </div>
  );
}

export default Categories;
