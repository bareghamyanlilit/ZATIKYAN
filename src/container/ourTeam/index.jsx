import React from "react"
import { Column, Container } from "../../styled"
import { teamMembers } from "../../constant/teamMembersArray"
import { Descr, Img, MainDiv, Member, Members, OurTeamContainer, Title } from "./styled"
import { First, Right, Left, Info } from "./styled"
import myTeamImg from "../../assets/img/team/team.jpg"
export const OurTeam = () => {
    return (
			<MainDiv>

				<OurTeamContainer>
					{/* <Container> */}
					<First>
						<Left>
							<Title>Our Team</Title>
							<Descr>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
								voluptates, quod, quibusdam, doloremque quas quae fugit quia
								voluptate quos doloribus officia. Quisquam, voluptate. Quisquam,
								voluptate.
							</Descr>
						</Left>
						<Right>
							<img src={myTeamImg} alt='Our Team' />
						</Right>
					</First>
					{/* </Container> */}
					<Container>
						<Members>
							{teamMembers.map((member, i) => (
								<Member key={i} i={i}>
									<Img>
										<img  src={member.imageUrl} alt={member.name} />
									</Img>
									<Info i={i}>
										<Title>{member.name}</Title>
										<span>{member.profession}</span>
										<Descr className='memberDescr'>{member.descr}</Descr>
									</Info>
								</Member>
							))}
						</Members>
					</Container>
				</OurTeamContainer>
			</MainDiv>
		)
}