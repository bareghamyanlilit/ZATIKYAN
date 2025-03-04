import { Header, HeaderLogo, IconDiv, LeftHeader, MenuItems, MenueLink, RightHeader, ShopName } from './styled'
import logo from '../../assets/img/logo.png'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IoMenuSharp } from 'react-icons/io5'
import { MenuLang } from '../menuLang'
import { HeaderResponsive } from '../header-responsive'

export const MyHeader = ({ }) => {
	const { t } = useTranslation()
	const loc = useLocation();
	const [openMenu, setOpenMenu] = useState(false)
	const arr = [
		{ name: 'Home', path: '/', active: loc.pathname === '/' ? true : false },
		{ name: 'About', path: '/about', active: loc.pathname === '/about' ? true : false  },
		{ name: 'Services', path: '/services', active: loc.pathname === '/services' ? true : false  },
		{ name: 'Our Team', path: '/ourTeam', active: loc.pathname === '/ourTeam' ? true : false  },
		{ name: 'Contact', path: '/contact', active: loc.pathname === '/contact' ? true : false  },
		{ name: 'FAQ', path: '/faq', active: loc.pathname === '/faq' ? true : false  },
	]
	const [items, setItems] = useState(arr)
	useEffect(() => {
		setItems(arr)
	}, [loc])

	return (
		<>
			<Header>
				<LeftHeader>
					<HeaderLogo src={logo} />
					<ShopName to={'/'}>{t("ZATIKYAN")}</ShopName>
				</LeftHeader>

				<RightHeader>
					<MenuItems>
						{items.map((e, i) => (
							<MenueLink
								$active={e.active}
								to={e.path}
								key={e.path}
								onClick={() => changeActive(i)}
							>
								{t(e.name)}
							</MenueLink>
						))}
						<IconDiv onClick={() => setOpenMenu(e => !e)}>
							<IoMenuSharp />
						</IconDiv>
					</MenuItems>
					<MenuLang />
				</RightHeader>
			</Header>
			<HeaderResponsive
				$active={openMenu}
				items={items}
				setOpenMenu={setOpenMenu}
			/>
		</>
	)
}