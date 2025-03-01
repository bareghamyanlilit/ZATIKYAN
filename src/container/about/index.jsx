import React from 'react';
import { AboutContainer, AboutSection, AboutTitle, AboutText, AboutImage } from './styled';
import { Container, Flexible, UserCard } from '../../styled'
import { teamMembers } from '../../constant/teamMembersArray';
export const AboutPage = () => {
	return (
		<AboutContainer>
			<Container>
				<AboutSection>
					<AboutTitle>About Us</AboutTitle>
					<AboutText>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia inventore ipsa debitis? Sit dignissimos voluptatibus fugit incidunt temporibus magnam maiores tenetur dolore nemo, saepe ducimus in obcaecati quibusdam non ipsa, magni praesentium officia dolor est. Ab perspiciatis reiciendis at aliquid, suscipit provident sed id quo voluptates praesentium officia reprehenderit repellat, vero, temporibus deserunt similique recusandae consectetur molestiae hic. Molestias labore deleniti exercitationem minima reprehenderit sit repudiandae dolore iusto impedit praesentium numquam, minus aliquid eum soluta. Iste quae dolorem commodi alias saepe perspiciatis sint, atque quisquam minus quaerat sequi et molestias aliquam in voluptate culpa reprehenderit, totam a. Est, expedita in.
						At Zatikyan Physical Therapy, our mission is to help you regain your strength, mobility, and overall health with personalized care. We focus on evidence-based treatments to support your recovery and well-being. Whether you are recovering from an injury or managing chronic pain, we are here to guide you every step of the way.
					</AboutText>
				</AboutSection>
				<AboutSection>
					<AboutImage src="https://media.defense.gov/2021/Jan/13/2002564440/2000/2000/0/210113-F-EF974-1012.JPG" alt="Physical Therapy" />
				</AboutSection>

				<AboutSection>
					<AboutTitle>Our Mission</AboutTitle>
					<AboutText>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, magni. Iure eligendi ut temporibus repellendus veniam cupiditate facilis non animi quod. Accusantium laudantium ipsa voluptatum velit molestias quia iste laborum earum voluptates labore, voluptas dicta sint maxime ratione voluptatibus saepe! Ullam perspiciatis porro architecto id eveniet, exercitationem eos eaque pariatur.
						Our goal is to empower our patients to live their best lives through compassionate care, skilled treatments, and innovative solutions.
					</AboutText>
				</AboutSection>
				<AboutSection>
					<AboutTitle>Our Team</AboutTitle>
					<Flexible>
						{teamMembers.map((member, index) => (
							index <= 3 ? 
							<UserCard key={index}>
								<AboutImage src={member.imageUrl} alt={member.name} />
								<h3>{member.name}</h3>
								<span>({member.profession})</span>
							</UserCard>
							: ""
						))}
					</Flexible>
				</AboutSection>
			</Container>
		</AboutContainer>
	);
};