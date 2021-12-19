import React from 'react'
import './SearchBox.css'
const SearchBox =({handleInputChange})=>{
    return(
        <div className="search-container">
        <input 
        onChange={(event) => handleInputChange(event.target.value)}
        className="search-input" 
        placeholder="Type Keywords"
        
        ></input>
        </div>
    )
}

export default SearchBox;