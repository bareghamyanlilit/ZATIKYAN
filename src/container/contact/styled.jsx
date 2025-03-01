import styled from "styled-components"
import img from '../../assets/img/contact/img.jpg'
import { globalColor } from '../../assets/colors'

// Styled Components
export const MainDiv = styled.div`
	padding: 80px 0 0;
	overflow: hidden;
	@media (max-width: 480px) {
		padding-top: 60px;
	}
`
export const Content = styled.div`

`


export const HeroSection = styled.div`
	position: relative;
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #e63946;
	color: white;
	text-align: center;
	width: 100%;
	background-image: url(${img});
	background-repeat: no-repeat;
	background-position: center bottom;
	background-size: cover;
	background-attachment: fixed;
	@media (max-width: 480px) {
		height: 60vh;
	}
`
export const First = styled.div`
	backdrop-filter: brightness(0.5);
	font-family: serif;
	text-shadow: 0px 0px 14px ${globalColor.darkGray};
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
	h1 {
		margin-bottom: 20px;
		font-size: calc(16px + 1vw);
		color: ${globalColor.white};
	}
	p {
		font-size: 20px;
		margin-bottom: 20px;
		font-size: calc(12px + 0.5vw);
		max-width: 500px;
		color: ${globalColor.white};
		@media (max-width: 480px) {
			max-width: 320px;
			font-size: calc(12px + 1vw);
		}
	}
`
export const TopTitle = styled.h1`
	text-align: center;
	color: ${globalColor.white};
	font-size: calc(26px + 1vw);
	margin-bottom: 10px;
	text-shadow: 0px 0px 2px ${globalColor.darkGray};
`

export const ContactSection = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: inset 0px 0px 0px 0px ${globalColor.gray},
		inset 1px 18px 100px ${globalColor.gray};

	@media (max-width: 480px) {
		height: 60vh;
	}
`

export const ContactInfo = styled.div`
	text-align: center;
	img {
		width: 250px;
		height: 250px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 15px;
		@media (max-width: 480px) {
			width: 150px;
			height: 150px;
		}
	}
	h2 {
		margin-bottom: 10px;
	}
`

export const InfoItem = styled.p`
	margin: 8px 0;
	font-size: 18px;
	a {
		text-decoration: none;
		color: #2269ab;
		font-weight: bold;
	}
`

export const FormSection = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	h2 {
		margin-bottom: 20px;
	}
	@media (max-width: 480px) {
		height: 80vh;
	}
`
export const Title = styled.h2`
	text-align: center;
	color: ${globalColor.titleColor};
	font-size: calc(18px + 1vw);
	margin-bottom: 30px;
`

export const Input = styled.input`
	width: 100%;
	padding: 20px;
	margin-bottom: 25px;
	border: 1px solid #ddd;
	border-radius: 5px;
	font-size: 22px;
	@media (max-width: 480px) {
		font-size: 16px;
		padding: 10px;
	}
`

export const Textarea = styled.textarea`
	width: 100%;
	padding: 20px;
	height: 100px;
	border: 1px solid #ddd;
	border-radius: 5px;
	font-size: 22px;
	resize: none;
	@media (max-width: 480px) {
		font-size: 16px;
		padding: 10px;
	}
`

export const Button = styled.button`
	width: 100%;
	padding: 20px;
	border: none;
	background: #525252;
	color: white;
	font-size: 18px;
	cursor: pointer;
	margin-top: 10px;
	border-radius: 5px;
	transition: 0.3s;
	@media (max-width: 480px) {
		font-size: 14px;
		padding: 10px;
	}

	&:hover {
		background: #b3b3b3;
	}
`

// Google Map Section
export const MapSection = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	@media (max-width: 480px) {
		height: 60vh;
	}
`

export const MapFrame = styled.iframe`
	width: 100%;
	height: 100%;
	border: none;
	/* border-radius: 10px; */
`

