import React from 'react';
import {useState, useRef} from "react";


function Navigation() {
    const [search, setSearch] = useState();
    const searchField = useRef();

    function handleSearch(e) {
        let newSearch = searchField.current.value
        setSearch(newSearch)
    }
    console.log(search);

  return (
    <div className='navBox'>
    <div className='brand'>BRAND</div>
    <input className='search' type="text" ref={searchField} ></input>
    <button onClick={handleSearch} >Search</button>
    <div className='menu'>MENU</div>
    </div>
  )
}

export default Navigation