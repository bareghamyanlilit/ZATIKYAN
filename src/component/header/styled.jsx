import { Link } from 'react-router-dom'
import styled from "styled-components"
import { globalColor } from '../../assets/colors'

export const Header = styled.header`
	position: fixed;
	z-index: 3;
	top: 0;
	width: 100%;
	height: 80px;
	padding: 0px 80px;
	background: ${globalColor.gray};
	display: flex;
	justify-content: space-between;
	@media (max-width: 480px) {
		padding: 0 20px;
		height: 60px;
	}
`
export const LeftHeader = styled.div`
	display: flex;
	gap: 50px;
	align-items: center;

	@media (max-width: 480px) {
		gap: 20px;
	}
`
export const HeaderLogo = styled.img`
	width: 60px;
	height: 60px;
	@media (max-width: 480px) {
		width: 40px;
		height: 40px;
	}
`
export const ShopName = styled(Link)`
	color: ${globalColor.white};
	font-size: 28px;
	@media (max-width: 480px) {
		font-size: 18px;
	}
`
export const RightHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	@media (max-width: 480px) {
		gap: 10px;
	}
`
export const MenuItems = styled.ul`
	display: flex;
	align-items: center;
	
`
export const MenueLink = styled(Link)`
	color: ${globalColor.white};
	text-decoration: none;
	height: 80px;
	padding: 0 15px;
	width: max-content;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	background-color: ${({ $active }) =>
		$active ? `${globalColor.darkGray}` : 'none'};
	&:hover {
		background-color: ${globalColor.darkGray};
	}
	@media (max-width: 700px) {
		display: none;
	}
`
export const IconDiv = styled(Link)`
	color: ${globalColor.txtColor};
	text-decoration: none;
	height: 80px;
	width: 100px;
	font-size: 28px;
	display: none;
	justify-content: center;
	align-items: center;
	color: ${globalColor.white};
	@media (max-width: 700px) {
		display: flex;
	}
	@media (max-width: 480px) {
		width: 50px;
		font-size: 24px;
		color: ${globalColor.white};
	}
`
export const Translate = styled.div`

`
