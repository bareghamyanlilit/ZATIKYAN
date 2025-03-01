import styled from 'styled-components';
import { globalColor } from '../../assets/colors';
import { NavLink } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: ${globalColor.gray};
  color: ${globalColor.white};
  padding: 40px 20px;
  text-align: center;
  hr {
    margin: 20px 0;
  }
`;
const FooterColumn = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	margin-bottom: 20px;
	div {
		text-align: left;
	}
	a {
		color: ${globalColor.white};
    margin-bottom: 5px;
    &:hover {
      color: ${globalColor.darkGray};
      text-decoration: underline;
    }
	}
`

const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 10px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
	text-align: left;
    gap: 5px;
    color: ${globalColor.white};
    text-decoration: none; 
    &:hover {
      color: ${globalColor.darkGray};
      text-decoration: underline;
    }
    @media (max-width: 230px) {
        p {
            display: none;
            color: red;
        }
    }
  }
`;

const FooterTitle = styled.h4`
  font-size: 20px;
  color: ${globalColor.darkGray};
  margin-bottom: 7px;
`;

const FooterLinks = styled.div`

`;
const StyledLink = styled(NavLink)`
  display: block;
  color: ${({active}) => active ? globalColor.black : "red"};
  text-decoration: none;
  margin-bottom: 5px;  

`;

const FooterFlexible = styled.div`
	display:flex;
	justify-content: space-around;
	align-items: center;
	gap: 17px;
	flex-wrap: wrap;
`;

export { FooterContainer, StyledLink, FooterFlexible, FooterSection, FooterColumn, FooterTitle, FooterLinks };
