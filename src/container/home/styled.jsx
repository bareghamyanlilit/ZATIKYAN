import styled from "styled-components"
import { globalColor } from '../../assets/colors'
import img from '../../assets/img/home/firstPartImg.jpg'

export const MainDiv = styled.div`
	padding: 80px 0 50px;
	overflow: hidden;
	@media (max-width: 480px) {
		padding-top: 60px;
	}
`

export const FirstPart = styled.div`
	height: 99vh;
	width: 100%;
	position: relative;
	background-image: url(${img});
	background-repeat: no-repeat;
	background-position: center bottom;
	background-size: cover;
`
export const First = styled.div`
	/* img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: brightness(0.5);
	} */
	backdrop-filter: brightness(0.5);
	font-family: serif;
	text-shadow: 0px 0px 14px #232323;
	color: ${globalColor.white};
	position: absolute;
	text-align: center;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	align-content: center;
	justify-items: center;
`
export const FirstPartTitle = styled.h1`
	margin-bottom: 20px;
	font-size: calc(16px + 1vw);
	color: ${globalColor.white};
`
export const FirstPartDescr = styled.p`
	margin-bottom: 20px;
	font-size: calc(12px + .5vw);
	max-width: 500px;
	color: ${globalColor.white};
	@media (max-width: 480px) {
		max-width: 320px;
		font-size: calc(12px + 1vw);
	}
`
export const Boxs = styled.div`
	
`

export const Box = styled.div`
	display: flex;
	flex-direction: ${({ i }) => (i % 2 === 0 ? 'row' : 'row-reverse')};
	min-height: 90vh;
	padding: 50px 0;
	@media (max-width: 480px) {
		flex-direction: column;
		gap: 30px;
	}
`
export const BoxLeft = styled.div`
	width: 50%;
	height: 100%;
	padding: 0 20px;
	align-self: center;
	@media (max-width: 480px) {
		width: 100%;
		padding: 0;
	}
`
export const BoxRight = styled.div`
	position: relative;
	width: 50%;
	height: 100%;
	align-self: center;
	text-align: center;
	img {
		width: 90%;
		height: 100%;
		object-fit: cover;
		border-radius: 30px;
	}
	&::before {
		content: '';
		position: absolute;
		z-index: -1;
		right: 5%;
		rotate: 90deg;
		height: 120%;
		border-radius: 70px 80px 170px 180px;
		width: 100%;
		rotate: 70deg;
		background: #e3e3ff;
		@media (max-width: 480px) {
			right: 0;
			rotate: 48deg;
			height: 120%;
			transform: translate(0%, 0%);
			border-radius: 0;
			left: -10%;
			width: 120%;
			rotate: 180deg;
			top: -10%;
		}
	}
	@media (max-width: 480px) {
		width: 100%;
	}

`
export const Title = styled.h2`
	text-align: center;
	color: ${globalColor.titleColor};
	font-size: calc(16px + 1vw);
	margin-bottom: 20px;
`
export const Descr = styled.p`
	text-align: center;
	line-height: 30px;
	color: ${globalColor.darkGray};
	font-size: calc(14px + 1vw);
	margin: 20px;
	@media (max-width: 480px) {
		text-align: justify;
	}
`