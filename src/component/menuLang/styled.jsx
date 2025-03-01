import styled from 'styled-components'
import { globalColor } from '../../assets/colors'

export const MenuContainer = styled.div`
	position: relative;
	display: inline-block;
`

export const MenuButton = styled.button`
	background: transparent;
	color: ${globalColor.txtColor};
	padding: 0px 20px;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	font-size: 24px;

	&:hover {
		background-color: ${globalColor.color};
	}
	@media (max-width: 480px) {
		padding: 0;
	}
`

export const MenuItems = styled.ul`
	position: absolute;
	top: 50px;
	right: 0;
	background: ${globalColor.gray};
	border: none;
	border-radius: 5px;
	list-style: none;
	padding: 0;
	margin: 0;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: ${props => (props.open ? 'block' : 'none')};
`

export const MenuItem = styled.li`
	padding: 14px 26px;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 10px;
	color: ${globalColor.white};
	border-radius: 5px;
	&:hover {
		background: ${globalColor.darkGray};
	}
`

export const Flag = styled.img`
	width: 46px;
	height: max-content;
	border-radius: 3px;
	@media (max-width: 480px) {
		width: 30px;
	}
`
