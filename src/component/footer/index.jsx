import React, { useState, useEffect } from "react"
import { FooterContainer, FooterSection, FooterTitle, FooterColumn, FooterFlexible, FooterLinks, StyledLink } from './styled';
import { Link, useLocation } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneSquareAlt } from 'react-icons/fa'
import { Container, Flexible } from "../../styled";
import Logo from "../../assets/img/logo.png";
import { useTranslation } from 'react-i18next'; // import the hook

export const MyFooter = () => {
	const { t } = useTranslation(); // useTranslation hook
	const [items, setItems] = useState([]);
	const loc = useLocation();

	const footerArray = [
		{ name: 'Home', path: '/', active: loc.pathname === "/" },
		{ name: 'Our Team', path: '/ourTeam', active: loc.pathname === "/our-team" },
		{ name: 'Services', path: '/services', active: loc.pathname === "/services" },
		{ name: 'About', path: '/about', active: loc.pathname === "/about" },
		{ name: 'Contact', path: '/contact', active: loc.pathname === "/contact" },
		{ name: 'FAQ', path: '/faq', active: loc.pathname === "/faq" },
	];

	useEffect(() => {
		setItems(footerArray)
	}, [loc])

	const changeActive = (index) => {
		setItems(prev => {
			return (
				prev.map((e, i) => {
					if (i === index) {
						return { ...e, active: true }
					} else {
						return { ...e, active: false }
					}
				})
			)
		})
	}

	return (
		<FooterContainer>
			<Container>
				<FooterFlexible>
					<img src={Logo} alt="Zatikyan Physical Therapy" />
					<FooterColumn>
						<FooterTitle>{t('Our Address')}</FooterTitle> {/* Translate "Our Address" */}
						<Link to="">{t('Avag Petrosyan 4, Yerevan')}</Link>
					</FooterColumn>
					<FooterColumn>
						<FooterTitle>{t('Working Hours')}</FooterTitle> {/* Translate "Working Hours" */}
						<Flexible>
							<div>
								{[t("Monday"),
								t("Tuesday"),
								t("Wednesday"),
								t("Thursday"),
								t("Friday"),
								t("Saturday"),
								t("Sunday")].map(day => (
									<p key={day}>{t(day)}</p> // Translate day names
								))}
							</div>
							<div>
								{Array(7).fill(t("09:00 - 20:00")).map((time, i) => (
									<p key={i}>{time}</p>
								))}
							</div>
						</Flexible>
					</FooterColumn>
				</FooterFlexible>
				<hr />
				<div>
					<Flexible>
						<FooterColumn>
							<FooterTitle>{t('Zatikyan Physical Therapy')}</FooterTitle> {/* Translate company name */}
							<p>{t('Improving your health with expert care and personalized treatment')}</p> {/* Translate description */}
						</FooterColumn>
						<FooterColumn>
							<FooterTitle>{t('Quick Links')}</FooterTitle> {/* Translate "Quick Links" */}
							<FooterLinks>
								{items.map((e, index) => (
									<StyledLink
										onClick={() => changeActive(index)}
										key={index}
										to={e.path}
										$active={e.active}
									>
										<Link to={e.path}>{t(e.name)}</Link> {/* Translate menu items */}
									</StyledLink>
								))}
							</FooterLinks>
						</FooterColumn>
					</Flexible>
					<FooterSection>
						<FooterTitle>{t('Follow Us')}</FooterTitle> {/* Translate "Follow Us" */}
						<FooterSection>
							<Link to=""><FaFacebook /> <p>{t('Lorem ipsum dolor')}</p></Link>
							<Link to="https://www.instagram.com/zatikyan_physical_therapy/"><FaInstagram /> <p>zatikyan_physical_therapy</p></Link>
						</FooterSection>
					</FooterSection>
					<FooterSection>
						<FooterTitle>{t('Contact With Us')}</FooterTitle> {/* Translate "Contact With Us" */}
						<FooterSection>
							<Link to="tel:+37495801851"><FaPhoneSquareAlt /> <span>+374 95 80 18 51</span></Link>
							<Link to="mailto:marineavet2006@gmail.com"><FaEnvelope /> clincicemail@gmail.com </Link>
						</FooterSection>
					</FooterSection>
					<p>&copy; 2025 Zatikyan Physical Therapy. {t('All rights reserved.')}</p> {/* Translate copyright text */}
				</div>
			</Container>
		</FooterContainer>
	)
}
