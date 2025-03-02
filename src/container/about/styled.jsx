import styled from 'styled-components';
import { globalColor } from '../../assets/colors';

const AboutContainer = styled.div`
  padding: 130px 0px 50px;
  background: ${globalColor.white};
  color: ${globalColor.darkGray};
  text-align: center;
`;

const AboutSection = styled.div`
  margin-bottom: 40px;
  .users{
	gap: 40px;
  }
`

const AboutTitle = styled.h2`
	font-size: calc(18px + 1vw);
	color: ${globalColor.darkGray};
	margin-bottom: 20px;
`

const AboutText = styled.p`
	font-size: calc(14px + 1vw);
	line-height: 1.5;
	color: ${globalColor.gray};
	text-align: justify;
`
const UserCard = styled.div`
	width: 45%;
	height: 550px;
	position: relative;
	border: 1px solid #ddd;
	border-radius: 17px;
	text-align: center;
	overflow: hidden;
	/* padding: 10px; */
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	background: #fff;
	cursor: pointer;
	gap: 20px;
	&:hover {
		box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
		transform: translateY(-5px);
	}
	h3 {
		margin: 10px 0;
		color: ${globalColor.titleColor};
		font-size: calc(16px + 1vw);
	}
	span {
		color: ${globalColor.gray};
		font-size: calc(14px + 1vw);
	}
`
const AboutImage = styled.img`
  width: 100%;
  height: 400px;
  /* margin-top: 20px; */
  object-fit: cover;
`;

export {
	AboutContainer,
	AboutSection,
	AboutTitle,
	AboutText,
	AboutImage,
	UserCard,
}