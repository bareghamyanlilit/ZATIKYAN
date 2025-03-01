import React from "react"
import { FooterContainer, FooterSection, FooterTitle, FooterColumn, FooterFlexible, FooterLinks } from './styled';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneSquareAlt } from 'react-icons/fa'
import { Container, Flexible } from "../../styled";
import Logo from "../../assets/img/logo.png";
import { DiVisualstudio } from "react-icons/di";

export const MyFooter = () => {
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
								<p>Monday</p>
								<p>Tuesday</p>
								<p>Wednesday</p>
								<p>Thursday</p>
								<p>Friday</p>
								<p>Saturday</p>
								<p>Sunday</p>
							</div>
							<div>
								<p>09:00 - 20:00</p>
								<p>09:00 - 20:00</p>
								<p>09:00 - 20:00</p>
								<p>09:00 - 20:00</p>
								<p>09:00 - 20:00</p>
								<p>09:00 - 20:00</p>
								<p>09:00 - 20:00</p>
							</div>
						</Flexible>
					</FooterColumn>
				</FooterFlexible>
				<div>
					<FooterSection>
						<FooterTitle>Zatikyan Physical Therapy</FooterTitle>
						<p>Improving your health with expert care and personalized treatment</p>
					</FooterSection>

					<FooterSection>
						<FooterTitle>Quick Links</FooterTitle>
						<FooterLinks>
							<Link to="/">Home</Link>
							<Link to="/services">Services</Link>
							<Link to="/about">About Us</Link>
							<Link to="/contact">Contact</Link>
						</FooterLinks>
					</FooterSection>

					<FooterSection>
						<FooterTitle>Follow Us</FooterTitle>
						<FooterSection>
							<Link to=""> <FaFacebook /> <p>Lorem ipsum dolor</p> </Link>
							<Link to="https://www.instagram.com/zatikyan_physical_therapy/"> <FaInstagram /> <p>zatikyan_physical_therapy</p> </Link>
						</FooterSection>
					</FooterSection>
					<FooterSection>
						<FooterTitle>Contact with Us</FooterTitle>
						<FooterSection>
							<Link to="tel:+37495801851"> <FaPhoneSquareAlt /> <span>+374 95 80 18 51</span></Link>
							<Link to="mailto:marineavet2006@gmail"> <FaEnvelope /> clincicemail@gmail.com </Link>
						</FooterSection>
					</FooterSection>
					<p>&copy; 2025 Zatikyan Physical Therapy. All rights reserved.</p>
				</div>
			</Container>
		</FooterContainer>
	)
}