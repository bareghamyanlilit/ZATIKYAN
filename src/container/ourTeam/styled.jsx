import styled from "styled-components";
import { globalColor } from '../../assets/colors'
import memberBg from '../../assets/img/team/pexels-thirdman-5327579.jpg'
export const MainDiv = styled.div`
	padding: 80px 0 0;
	overflow: hidden;
    background-image: url(${memberBg});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
    background-attachment: fixed;
	@media (max-width: 480px) {
		padding-top: 60px;
	}
`
export const OurTeamContainer = styled.div`
    width: 100%;
    backdrop-filter: brightness(.5);

`
export const First = styled.div`
height: 90vh;
position: relative;
background: ${globalColor.darkGray};


`
export const Left = styled.div`
	position: absolute;
	transform: translate(0%, -50%);
	top: 50%;
	left: 5%;
	height: 65%;
	width: 50%;
	display: flex;
	flex-direction: column;
    justify-content: center;
	color: ${globalColor.white};
	background: ${globalColor.white};
	border-radius: 20px;
`

export const Title = styled.h1`
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
export const Right = styled.div`
	height: 100%;
	width: 50vw;
	justify-self: right;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const Members = styled.div`
	display: flex;
	flex-direction: column;
	gap: 80px;
	margin-top: 50px;
`
export const Member = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	position: relative;
	flex-direction: ${({ i }) => (i % 2 === 0 ? 'row' : 'row-reverse')};
`
export const Img = styled.div`
	position: relative;
	height: 90vh;
	width: 50%;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 20px;
	}
	&::before {
		content: '';
		position: absolute;
		width: 120%;
		height: 90%;
		left: -10%;
		z-index: -1;
		/* background: rgba(0, 0, 0, 0.6); */
	}
`
export const Info = styled.div`
	position: absolute;
	width: 60%;
	left: ${({ i }) => (i % 2 === 0 ? '45%' : '-5%')};
	top: 50%;
	transform: translate(0%, -50%);
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
	min-height: 500px;
	background: #ffffff96;
	border-radius: 20px ;
    .memberDescr {
		text-align: justify;
		font-size: calc(12px + 0.5vw);
	}
`