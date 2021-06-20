import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, getPokemonsByType } from '../Redux/Actions/Pokemon/PokemonActions'

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
const Types = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	transition: .25s;
	img {
		margin: .5em;
		height: 4em;
		width: 4em;
		object-fit: contain;
		transition: .25s;
		&:hover {
			cursor: pointer;
			transform: scale(1.25);
		}
	}
`

const AsideMenu = () => {

	const style = useSelector(state => state.themes.style)

	const dispatch = useDispatch()

    return (
        <nav className="accordion arrows">

		<header className={(style === 'glass' ? 'box-glass' : 'box')}>
			<label for="acc-close" className={(style === 'glass') ? 'box-title glass' : 'box-title'}>Settings</label>
		</header>

		<input type="radio" name="accordion" id="cb1" />
		<section className="box">
			<label className="box-title" for="cb1">List</label>
			<label className="box-close" for="acc-close"></label>
			<div className="box-content">
            	<Caption onClick={() => dispatch(getAllPokemons(151, 0))}>
					Generation 1
				</Caption>
            	<Caption onClick={() => dispatch(getAllPokemons(100, 151))}>
					Generation 2
				</Caption>
            	<Caption onClick={() => dispatch(getAllPokemons(135, 251))}>
					Generation 3
				</Caption>			
			</div>
		</section>

		<input type="radio" name="accordion" id="cb2" />
		<section className="box">
			<label className="box-title" for="cb2">Types</label>
			<label className="box-close" for="acc-close"></label>
			<div className="box-content">
				<Types>
					<div>
					<img src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Pokémon_Bug_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('bug'))}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/0/09/Pokémon_Dark_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('dark'))}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Pokémon_Dragon_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('dragon'))}/>
					</div>
					<div>
					<img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Pokémon_Electric_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('electric'))}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Pokémon_Fairy_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('fairy'))}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/b/be/Pokémon_Fighting_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('fighting'))}/>
					</div>
					<div>
					<img src='https://upload.wikimedia.org/wikipedia/commons/5/56/Pokémon_Fire_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('fire'))}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/e/e0/Pokémon_Flying_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('flying'))}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Pokémon_Ghost_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('ghost'))}/>
					</div>
					<div>
					<img src='https://upload.wikimedia.org/wikipedia/commons/f/f6/Pokémon_Grass_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('grass'))}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/8/8d/Pokémon_Ground_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('ground'))}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/8/88/Pokémon_Ice_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('ice'))}/>
					</div>
					<div>
					<img src='https://upload.wikimedia.org/wikipedia/commons/a/aa/Pokémon_Normal_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('normal'))}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/c/c4/Pokémon_Poison_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('poison'))}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Pokémon_Psychic_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('psychic'))}/>
					</div>
					<div>
					<img src='https://upload.wikimedia.org/wikipedia/commons/b/bb/Pokémon_Rock_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('rock'))}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/3/38/Pokémon_Steel_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('steel'))}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Pokémon_Water_Type_Icon.svg' alt='' onClick={() => dispatch(getPokemonsByType('water'))}/>
					</div>
				</Types>
			</div>
		</section>

		{/* <input type="radio" name="accordion" id="cb3" />
		<section className="box">
			<label className="box-title" for="cb3">Item 3</label>
			<label className="box-close" for="acc-close"></label>
			<div className="box-content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque finibus tristique nisi, maximus ullamcorper ante finibus eget.</div>
		</section> */}

		<input type="radio" name="accordion" id="acc-close" />
	    </nav>
    )
}

export default AsideMenu
