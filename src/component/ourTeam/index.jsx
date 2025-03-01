import React from "react"
import { Container, Flexible, UserCard } from "../../styled"
import { teamMembers } from "../../constant/teamMembersArray"
import { OurTeamContainer } from "./styled"

export const OurTeam = () => {
    return (
        <>
            <OurTeamContainer>
                <Container>
                    <Flexible>
                        {
                            teamMembers.map((member, index) => (
                                <UserCard key={index}>
                                    <img src={member.imageUrl} alt={member.name} />
                                    <h3>{member.name}</h3>
                                    <span>({member.profession})</span>
                                </UserCard>
                            ))
                        }
                    </Flexible>
                </Container>
            </OurTeamContainer>
        </>
    )
}