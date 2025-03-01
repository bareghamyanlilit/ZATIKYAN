import React from 'react'
import contactImg from '../../assets/img/logo.png'
import { Button, ContactInfo, ContactSection, FormSection, HeroSection, InfoItem, Input, MapFrame, MapSection, Textarea, TopTitle, Title, MainDiv, First, Content } from './styled'
import { Container } from '../../styled'

export const ContactPage = () => {
	return (
		<MainDiv>
			<HeroSection>
				<Container>
					<First>
						<TopTitle>Contact Us</TopTitle>
						<p>We're here to help. Get in touch with us today!</p>
					</First>
				</Container>
			</HeroSection>
			<Content>
						<ContactSection>
							<Container>
								<ContactInfo>
									<img src={contactImg} alt='Contact' />
									<Title>Get in Touch</Title>
									<p>Feel free to contact us for any inquiries.</p>
									<InfoItem>
										📞 <a href='tel:+123456789'>+123 456 789</a>
									</InfoItem>
									<InfoItem>
										✉️ <a href='mailto:info@example.com'>info@example.com</a>
									</InfoItem>
								</ContactInfo>
							</Container>
						</ContactSection>
						
						<FormSection>
							<Container>
								<Title>Send Us a Message</Title>
								<form>
									<Input type='text' placeholder='Your Name' required />
									<Input type='email' placeholder='Your Email' required />
									<Textarea placeholder='Your Message' required></Textarea>
									<Button type='submit'>Send Message</Button>
								</form>
							</Container>
						</FormSection>

						<MapSection>
							<Title>Find Us</Title>
							<MapFrame
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086166!2d144.95373511531506!3d-37.81627937975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c65c5d3d3c3e0!2sMelbourne%2C%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614064748902!5m2!1sen!2sus'
								allowFullScreen=''
								loading='lazy'
							></MapFrame>
						</MapSection>
			</Content>
		</MainDiv>
	)
}