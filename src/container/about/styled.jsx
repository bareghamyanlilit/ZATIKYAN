import styled from 'styled-components';
import { globalColor } from '../../assets/colors';

const AboutContainer = styled.div`
  padding: 50px 0px;
  background: ${globalColor.white};
  color: ${globalColor.darkGray};
  text-align: center;
`;

const AboutSection = styled.div`
  margin-bottom: 40px;
`;

const AboutTitle = styled.h2`
  font-size: 28px;
  color: ${globalColor.darkGray};
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: ${globalColor.gray};
  text-align: justify;
`;

const AboutImage = styled.img`
  width: 100%;
  margin-top: 20px;
`;

export { AboutContainer, AboutSection, AboutTitle, AboutText, AboutImage };