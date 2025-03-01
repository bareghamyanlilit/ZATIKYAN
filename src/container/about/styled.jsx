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
`;

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

const AboutImage = styled.img`
  width: 100%;
  margin-top: 20px;
`;

const AboutCard = styled.div`
  max-width: 200px;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 17px;
  text-align: center;
  overflow: hidden;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
  cursor: pointer;
  gap: 10px;
  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

export { AboutContainer, AboutCard, AboutSection, AboutTitle, AboutText, AboutImage };