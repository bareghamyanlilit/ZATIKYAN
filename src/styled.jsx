import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	button {
		cursor: pointer;
		border: 0;
	}

	a {
		text-decoration: none;
	}

	li {
		list-style-type: none;
	}
`

const Flexible = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 20px;
`
const Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: 50px;
`
const Container = styled.div`
	max-width: 1200px;
	margin: auto;

	@media (max-width: 1400px) {
		max-width: 1100px;
	}

	@media (max-width: 1200px) {
		max-width: 1000px;
	}

	@media (max-width: 992px) {
		max-width: 800px;
	}

	@media (max-width: 768px) {
		max-width: 600px;
	}

	@media (max-width: 576px) {
		max-width: 500px;
	}

	@media (max-width: 480px) {
		max-width: 400px;
	}

	@media (max-width: 400px) {
		max-width: 100%;
		padding: 0 20px;
	}
`

const Button = styled.button`
	border-radius: 10px;
	border: 1px solid;
	outline: 0;
	color: #fff;
	font-weight: bold;
	padding: 10px 25px;
	margin-top: 20px;
	transition: background 0.3s ease, transform 0.2s ease;

	&:hover {
		transform: translateY(-2px);
	}

	&:active {
		transform: translateY(2px);
	}
`

const Checkbox = styled.input`
	margin-top: 10px;
	appearance: none;
	width: 18px;
	height: 18px;
	border-radius: 4px;
	position: relative;
	cursor: pointer;
	transition: background-color 0.2s, border-color 0.2s;

	&:checked::after {
		content: '';
		position: absolute;
		width: 5px;
		height: 8px;
		border-width: 0 4px 4px 0;
		border-style: solid;
		border-color: #000;
		transform: rotate(45deg);
		top: 3px;
		left: 6px;
	}

	&:focus {
		outline: none;
	}
`

export { Flexible, Checkbox, Button, Container, GlobalStyles, Column }
