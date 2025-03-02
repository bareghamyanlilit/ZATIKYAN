import React from 'react';
import {
	AboutContainer,
	AboutSection,
	AboutTitle,
	AboutText,
	AboutImage,
	UserCard,
} from './styled'
import { Container, Flexible } from '../../styled'
import { teamMembers } from '../../constant/teamMembersArray';
import { useTranslation } from 'react-i18next';

export const AboutPage = () => {
	const { t } = useTranslation(); 

	return (
		<AboutContainer>
			<Container>
				<AboutSection>
					<AboutTitle>{t('aboutUsTitle')}</AboutTitle>
					<AboutText>
						{t('aboutUsText')}
					</AboutText>
				</AboutSection>
				<AboutSection>
					<AboutImage src="https://media.defense.gov/2021/Jan/13/2002564440/2000/2000/0/210113-F-EF974-1012.JPG" alt="Physical Therapy" />
				</AboutSection>

				<AboutSection>
					<AboutTitle>{t('ourMissionTitle')}</AboutTitle>
					<AboutText>
						{t('ourMissionText')}
					</AboutText>
				</AboutSection>
				<AboutSection>
					<AboutTitle>Our Team</AboutTitle>
					<Flexible className='users'>
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
