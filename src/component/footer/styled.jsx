import styled from 'styled-components';
import { globalColor } from '../../assets/colors';
import { Flexible } from '../../styled';

const FooterContainer = styled.footer`
  background: ${globalColor.gray};
  color: ${globalColor.white};
  padding: 40px 20px;
  text-align: center;
`;
const FooterColumn = styled(Flexible)`
	align-items: start;
	flex-direction: column;
	// justify-content: space-around;
	margin-bottom: 20px;
	div {
		text-align: left;
	}
	a {
		color: ${globalColor.white};
        margin-bottom: 5px;
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
`;

const FooterLinks = styled.div`
    a {
        display: block;
        color: ${globalColor.white};
        text-decoration: none;
        margin-bottom: 5px;      
    }
`;

const FooterFlexible = styled.div`
	display:flex;
	justify-content: space-around;
	align-items: center;
	gap: 17px;
	flex-wrap: wrap;
`;

export { FooterContainer, FooterFlexible, FooterSection, FooterColumn, FooterTitle, FooterLinks };
