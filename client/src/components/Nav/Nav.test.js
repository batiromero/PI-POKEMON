import React from 'react';
import {Link} from 'react-router-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Nav from './index';

Enzyme.configure({adapter: new Adapter()});

describe('<Nav />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Nav />);
	});

	it('It should render 2 Link tags', () => {
		expect(wrapper.find(Link)).toHaveLength(2);
	});
	it('First link should be part of the logo must have the text "Pokedex App" and lead to /home', () => {
		expect(wrapper.find(Link).at(0).prop('to')).toEqual('/home');
		expect(wrapper.find(Link).at(0).text()).toEqual('Pokedex App');
	});
	it('Second link must have text "Create Pokémon" and lead to /create', () => {
		expect(wrapper.find(Link).at(1).prop('to')).toEqual('/create');

		expect(wrapper.find(Link).at(1).text()).toEqual('Create Pokémon');
	});
	
});
