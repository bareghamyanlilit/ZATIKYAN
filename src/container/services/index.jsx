import React from 'react'
import styled from 'styled-components'
import { services } from '../../constant/servicesArray.jsx'
import { globalColor } from '../../assets/colors/index.jsx'
import { useTranslation } from 'react-i18next'

const ServicesContainer = styled.section`
  width: 100%;
  min-height: 400vh;
  background: ${globalColor.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 10%;
`

const Title = styled.h1`
  font-size: 3.5rem;
  color: ${globalColor.titleColor};
  margin-bottom: 50px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1400px;
`

const ServiceCard = styled.div`
  background: #3d3d3d;
  color: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  }
`

const ServiceIcon = styled.div`
  font-size: 60px;
  margin-bottom: 25px;
`

const ServiceTitle = styled.h2`
  font-size: calc(16px + 1vw);
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
`

const ServiceDescription = styled.p`
  font-size: calc(14px + 1vw);
  opacity: 0.9;
  line-height: 1.6;
  text-align: justify;
`

const DetailsSection = styled.div`
  width: 100%;
  background: #1a222a;
  padding: 80px 10%;
  color: ${globalColor.white};
  text-align: center;
  margin-top: 50px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 20px;
  }
`

const DetailsTitle = styled.h2`
  font-size: calc(16px + 1vw);
  margin-bottom: 20px;
`

const DetailsDescr = styled.p`
  font-size: calc(14px + 1vw);
  margin: 10px;
`

export const ServicesPage = () => {
  const { t } = useTranslation()

  return (
    <ServicesContainer>
      <Title>{t('Our Services')}</Title>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{t(service.title)}</ServiceTitle>
            <ServiceDescription>{t(service.description)}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceGrid>
      {services.map((service, index) => (
        <DetailsSection key={index}>
          <DetailsTitle>{t(service.title)}</DetailsTitle>
          <img src={service.image} alt={service.title} />
          <DetailsDescr>{t(service.details)}</DetailsDescr>
        </DetailsSection>
      ))}
    </ServicesContainer>
  )
}
