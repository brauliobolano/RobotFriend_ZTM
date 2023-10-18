import React from 'react';

const SearchBox = ({searchfield, SearchChange}) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue' 
				type='search' 
				onChange={SearchChange}
				placeholder='Search Robot'
				 
			/>
		</div>	
	);
}

export default SearchBox;