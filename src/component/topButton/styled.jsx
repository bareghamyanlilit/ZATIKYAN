import styled from 'styled-components'
import { globalColor } from '../../assets/colors'

export const BackToTopButton = styled.button`
	position: fixed;
	bottom: 20px;
	right: 20px;
	padding: 10px 15px;
	font-size: 16px;
	border: none;
	background: ${globalColor.black};
	color: ${globalColor.white};
	border-radius: 5px;
	cursor: pointer;
	opacity: ${({ $show }) => ($show ? '1' : '0')};
	visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
	transition: opacity 0.3s, visibility 0.3s;
	transition: .5s;
	pointer-events: ${({ $show }) =>$show ? 'auto' : 'none'}; 
	&:hover {
		background: ${globalColor.gray};
	}
`

