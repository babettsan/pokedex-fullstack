import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, getPokemonsByType } from '../Redux/Actions/Pokemon/PokemonActions'

import Click from '../Sounds/Click.mp3'
import { Howl } from 'howler'
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

	const click = new Howl({
        src: [Click],
        volume: 0.25
	})

    return (
        <nav className="accordion arrows">

		<header className={(style === 'glass' ? 'box-glass' : 'box')}>
			<label for="acc-close" className={(style === 'glass') ? 'box-title glass' : 'box-title'}>Settings</label>
		</header>

		<input type="radio" name="accordion" id="cb1" />
		<section className="box">
			<label className="box-title" for="cb1" onClick={() => click.play()}>List</label>
			<label className="box-close" for="acc-close"></label>
			<div className="box-content">
            	<Caption onClick={() => {dispatch(getAllPokemons(151, 0)); click.play()}}>
					Generation 1
				</Caption>
            	<Caption onClick={() => {dispatch(getAllPokemons(100, 151)); click.play()}}>
					Generation 2
				</Caption>
            	<Caption onClick={() => {dispatch(getAllPokemons(135, 251)); click.play()}}>
					Generation 3
				</Caption>
				<Caption onClick={() => {dispatch(getAllPokemons(107, 386)); click.play()}}>
					Generation 4
				</Caption>	
				<Caption onClick={() => {dispatch(getAllPokemons(156, 493)); click.play()}}>
					Generation 5
				</Caption>
				<Caption onClick={() => {dispatch(getAllPokemons(72, 649)); click.play()}}>
					Generation 6
				</Caption>
				<Caption onClick={() => {dispatch(getAllPokemons(88, 721)); click.play()}}>
					Generation 7
				</Caption>
				<Caption onClick={() => {dispatch(getAllPokemons(88, 810)); click.play()}}>
					Generation 8
				</Caption>
				<Caption onClick={() => {dispatch(getAllPokemons(500, 898)); click.play()}}>
					Specials
				</Caption>
			</div>
		</section>

		<input type="radio" name="accordion" id="cb2" />
		<section className="box">
			<label className="box-title" for="cb2" onClick={() => click.play()}>Types</label>
			<label className="box-close" for="acc-close"></label>
			<div className="box-content">
				<Types>
					<div>
					<img src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Pokémon_Bug_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('bug')); click.play()}}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/0/09/Pokémon_Dark_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('dark')); click.play()}}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Pokémon_Dragon_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('dragon')); click.play()}}/>
					</div>
					<div>
					<img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Pokémon_Electric_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('electric')); click.play()}}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Pokémon_Fairy_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('fairy')); click.play()}}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/b/be/Pokémon_Fighting_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('fighting')); click.play()}}/>
					</div>
					<div>
					<img src='https://upload.wikimedia.org/wikipedia/commons/5/56/Pokémon_Fire_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('fire')); click.play()}}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/e/e0/Pokémon_Flying_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('flying')); click.play()}}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Pokémon_Ghost_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('ghost')); click.play()}}/>
					</div>
					<div>
					<img src='https://upload.wikimedia.org/wikipedia/commons/f/f6/Pokémon_Grass_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('grass')); click.play()}}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/8/8d/Pokémon_Ground_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('ground')); click.play()}}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/8/88/Pokémon_Ice_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('ice')); click.play()}}/>
					</div>
					<div>
					<img src='https://upload.wikimedia.org/wikipedia/commons/a/aa/Pokémon_Normal_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('normal')); click.play()}}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/c/c4/Pokémon_Poison_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('poison')); click.play()}}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Pokémon_Psychic_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('psychic')); click.play()}}/>
					</div>
					<div>
					<img src='https://upload.wikimedia.org/wikipedia/commons/b/bb/Pokémon_Rock_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('rock')); click.play()}}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/3/38/Pokémon_Steel_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('steel')); click.play()}}/>
					<img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Pokémon_Water_Type_Icon.svg' alt='' onClick={() => {dispatch(getPokemonsByType('water')); click.play()}}/>
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
