import React, { useState, useEffect } from "react"
import { FooterContainer, FooterSection, FooterTitle, FooterColumn, FooterFlexible, FooterLinks, StyledLink } from './styled';
import { Link, useLocation } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneSquareAlt } from 'react-icons/fa'
import { Container, Flexible } from "../../styled";
import Logo from "../../assets/img/logo.png";

export const MyFooter = () => {
	const [items, setItems] = useState([]);
	const loc = useLocation();
	const footerArray = [
		{ name: 'Home', path: '/', active: loc.pathname === "/" },
		{ name: 'Services', path: '/services', active: loc.pathname === "/services" },
		{ name: 'About', path: '/about', active: loc.pathname === "/about" },
		{ name: 'Contact', path: '/contact', active: loc.pathname === "/contact" },
	];
	useEffect(() => {
		setItems(footerArray)
	}, [loc])
	const changeActive = (index) => {
		setItems(prev => {
			return (
				prev.map((e, i) => {
					if (i == index) {
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
						<FooterTitle>Our Adress</FooterTitle>
						<Link to="" >Avag Petrosyan 4, Yerevan</Link>
					</FooterColumn>
					<FooterColumn>
						<FooterTitle>Working Hours</FooterTitle>
						<Flexible>
							<div>
								{["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
									<p key={day}>{day}</p>
								))}
							</div>
							<div>
								{Array(7).fill("09:00 - 20:00").map((time, i) => (
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
							<FooterTitle>Zatikyan Physical Therapy</FooterTitle>
							<p>Improving your health with expert <br /> care and personalized treatment</p>
						</FooterColumn>
						<FooterColumn>
							<FooterTitle>Quick Links</FooterTitle>
							<FooterLinks>
								{items.map((e, index) => (
									<StyledLink
										onClick={() => changeActive(index)}
										key={index}
										to={e.path}
										active={e.active}
									>
										{e.name}
									</StyledLink>
								))}
							</FooterLinks>
						</FooterColumn>
					</Flexible>
					<FooterSection>
						<FooterTitle>Follow Us</FooterTitle>
						<FooterSection>
							<Link to=""> <FaFacebook /> <p>Lorem ipsum dolor</p> </Link>
							<Link to="https://www.instagram.com/zatikyan_physical_therapy/"> <FaInstagram /> <p>zatikyan_physical_therapy</p> </Link>
						</FooterSection>
					</FooterSection>
					<FooterSection>
						<FooterTitle>Contact With Us</FooterTitle>
						<FooterSection>
							<Link to="tel:+37495801851"> <FaPhoneSquareAlt /> <span>+374 95 80 18 51</span></Link>
							<Link to="mailto:marineavet2006@gmail.com"> <FaEnvelope /> clincicemail@gmail.com </Link>
						</FooterSection>
					</FooterSection>
					<p>&copy; 2025 Zatikyan Physical Therapy. All rights reserved.</p>
				</div>
			</Container>
		</FooterContainer>
	)
}