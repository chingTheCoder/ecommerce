import React from "react";




const SearchBar = () => {


    const onChange = () =>  {

    }

    return (
        <input
            className='searchBar'
            type="text"
            onChange={onChange}
            placeholder="Search for movies, Tv shows..."
        />
    )
}


export default SearchBar