import { Box, BoxLeft, BoxRight, Boxs, Descr, First, FirstPart, FirstPartDescr, FirstPartTitle, MainDiv, Title } from './styled'
import { Column, Container } from '../../styled'
import img1 from '../../assets/img/home/img1.jpg'
import img2 from '../../assets/img/home/img2.jpg'
import img3 from '../../assets/img/home/img3.jpg'
import img4 from '../../assets/img/home/img4.jpg'
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();

  const boxs = [
    {
      title: t('loremTitle'),
      descr: t('loremDescr'),
      image: img1,
    },
    {
      title: t('loremTitle'),
      descr: t('loremDescr'),
      image: img2,
    },
    {
      title: t('loremTitle'),
      descr: t('loremDescr'),
      image: img3,
    },
    {
      title: t('loremTitle'),
      descr: t('loremDescr'),
      image: img4,
    },
  ];

  return (
    <MainDiv>
      <FirstPart>
        <Container>
          <First>
            <FirstPartTitle>{t('welcomeTitle')}</FirstPartTitle>
            <FirstPartDescr>{t('welcomeDescription')}</FirstPartDescr>
          </First>
        </Container>
      </FirstPart>
      <Boxs>
        <Container>
          <Column>
            {boxs.map((e, i) => {
              return (
                <Box key={i + e.descr} i={i}>
                  <BoxLeft className='left'>
                    <Title>{e.title}</Title>
                    <Descr>{e.descr}</Descr>
                  </BoxLeft>
                  <BoxRight className='right'>
                    <img src={e.image} alt={t('imageAlt')} />
                  </BoxRight>
                </Box>
              )
            })}
          </Column>
        </Container>
      </Boxs>
    </MainDiv>
  );
};
