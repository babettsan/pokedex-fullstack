import React from 'react'

import { useDispatch } from 'react-redux'
import { getAllPokemons } from '../Redux/Actions/Pokemon/PokemonActions'

import './AsideMenu.css'
import styled from 'styled-components'

const Caption = styled.p`
    font-size: 1em;
    color: var(--font-color);
    transition: .2s;
	padding: 1em;
    &:hover {
        cursor: pointer;
        transform: scale(1.10);
		color: var(--main-color);
    }
`

const AsideMenu = () => {

	const dispatch = useDispatch()

    return (
        <nav class="accordion arrows">

		<header class="box">
			<label for="acc-close" class="box-title">Settings</label>
		</header>

		<input type="radio" name="accordion" id="cb1" />
		<section class="box">
			<label class="box-title" for="cb1">Pokemon List</label>
			<label class="box-close" for="acc-close"></label>
			<div class="box-content">
            	<Caption onClick={() => dispatch(getAllPokemons(151, 0))}>Generation 1</Caption>
            	<Caption onClick={() => dispatch(getAllPokemons(100, 151))}>Generation 2</Caption>
            	<Caption onClick={() => dispatch(getAllPokemons(135, 251))}>Generation 3</Caption>			
			</div>
		</section>

		<input type="radio" name="accordion" id="cb2" />
		<section class="box">
			<label class="box-title" for="cb2">Types</label>
			<label class="box-close" for="acc-close"></label>
			<div class="box-content">
				<Caption>Grass</Caption>	
				<Caption>Fire</Caption>
				<Caption>Water</Caption>
			</div>
		</section>

		{/* <input type="radio" name="accordion" id="cb3" />
		<section class="box">
			<label class="box-title" for="cb3">Item 3</label>
			<label class="box-close" for="acc-close"></label>
			<div class="box-content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque finibus tristique nisi, maximus ullamcorper ante finibus eget.</div>
		</section> */}

		<input type="radio" name="accordion" id="acc-close" />
	    </nav>
    )
}

export default AsideMenu
