import React from 'react';
import { AboutContainer, AboutSection, AboutTitle, AboutText, AboutImage } from './styled';
import { Container, Flexible, UserCard } from '../../styled';
import { teamMembers } from '../../constant/teamMembersArray';
import { useTranslation } from 'react-i18next'; // Import the correct hook

export const AboutPage = () => {
	const { t } = useTranslation(); // Corrected to useTranslation

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
					<AboutTitle>{t('ourTeamTitle')}</AboutTitle>
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
