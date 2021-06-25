import React from 'react';
import {StyledDiv} from './styled';

export const Filters = ({handleFilter, handleOrigin, handleTypes, pokemonsTypes}) => {
	return (
		<StyledDiv>
			<div className='div_container'>
			<select name='Filter' onChange={(e) => handleFilter(e)} className='select' type='text'>
				<option value='A-Z' className='select' type='text'>A-Z</option>
				<option value='Z-A'>Z-A</option>
				<option value='More Attack'>More Attack</option>
				<option value='Less Attack'>Less Attack</option>
			</select>
			<select name='Type' onChange={(e) => handleTypes(e) } className='select' type='text'>
				<option value='All'>TYPES</option>
				{pokemonsTypes?.map((t, i) => (
						<option key={i} value={t.name}>
							{t.name}
						</option>
					))}
			</select>
			<select name='Origin' onChange={(e) => handleOrigin(e)} className='select' type='text'>
				<option value='All'>ALL</option>
				<option value='API'>API</option>
				<option value='Pokedex App'>Created</option>
			</select>
			</div>
		</StyledDiv>
	);
};

export default Filters;
