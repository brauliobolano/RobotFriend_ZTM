import React from 'react';
import '../components/Scroll.css'

const Scroll = (porps)=> {
	return (
		<div className='example' style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
			{porps.children}
		</div>
	);
};


export default Scroll;