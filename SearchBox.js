import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div className = 'pa3'>
          <input
            className='pa3 ba br4 b--grey bg-lightest-grey shadow-5'
        
            type = 'search'
            placeholder='search robots'
            onChange={searchChange}
          />
        </div>
    );
};
export default SearchBox;
