import React, {useState} from 'react';
import '../css/Header.css';

function Header() {
  const [searchValue, onSearchInput] = useState('');

  return (
    <div className='Header'>
      <div className='header-left'>
        <a
          href=''
          target="_blank"
          rel="noopener noreferrer"
          >Home</a>
      </div>
      <div className='header-right'>
        <button>Search</button>
        <input
          type='text'
          placeholder='Search for card...'
          value={searchValue}
          onChange={(event) => onSearchInput(event.target.value)}
        />
      </div>
    </div>
  )
};

export default Header;