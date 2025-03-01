import { Box, BoxLeft, BoxRight, Boxs, Descr, First, FirstPart, FirstPartDescr, FirstPartTitle, MainDiv, Title } from './styled'
import { Column, Container } from '../../styled'
import img1 from '../../assets/img/home/img1.jpg'
import img2 from '../../assets/img/home/img2.jpg'
import img3 from '../../assets/img/home/img3.jpg'
import img4 from '../../assets/img/home/img4.jpg'
export const HomePage=()=>{
	const boxs = [
		{
			title: 'Lorem ipsum dolor',
			descr:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, cumque eaque nulla dolores repellendus explicabo totam, corporis officia optio fuga beatae delectus maiores? Praesentium, dolores! Corporis, tempore? Ipsam quidem cupiditate debitis enim excepturi! Eum modi officiis assumenda perferendis laudantium velit asperiores ab, adipisci vel eveniet quos, esse amet. Temporibus, iste!',
			image: img1,
		},
		{
			title: 'Lorem ipsum dolor',
			descr:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, cumque eaque nulla dolores repellendus explicabo totam, corporis officia optio fuga beatae delectus maiores? Praesentium, dolores! Corporis, tempore? Ipsam quidem cupiditate debitis enim excepturi! Eum modi officiis assumenda perferendis laudantium velit asperiores ab, adipisci vel eveniet quos, esse amet. Temporibus, iste!',
			image: img2,
		},
		{
			title: 'Lorem ipsum dolor',
			descr:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, cumque eaque nulla dolores repellendus explicabo totam, corporis officia optio fuga beatae delectus maiores? Praesentium, dolores! Corporis, tempore? Ipsam quidem cupiditate debitis enim excepturi! Eum modi officiis assumenda perferendis laudantium velit asperiores ab, adipisci vel eveniet quos, esse amet. Temporibus, iste!',
			image: img3,
		},
		{
			title: 'Lorem ipsum dolor',
			descr:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, cumque eaque nulla dolores repellendus explicabo totam, corporis officia optio fuga beatae delectus maiores? Praesentium, dolores! Corporis, tempore? Ipsam quidem cupiditate debitis enim excepturi! Eum modi officiis assumenda perferendis laudantium velit asperiores ab, adipisci vel eveniet quos, esse amet. Temporibus, iste!',
			image: img4,
		},
	]
	return (
		<MainDiv>
			<FirstPart>
				<Container>
					<First>
						<FirstPartTitle>WELCOME ZATIKYAN CLINIC</FirstPartTitle>
						<FirstPartDescr>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							vel libero at lectus rutrum vestibulum vitae ut turpis. Ut
							ultricies pulvinar posuere. Nulla rutrum, libero nec pharetra
							accumsan, enim leo blandit dui, ac bibendum augue dui sed metus.
						</FirstPartDescr>
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
										<img src={e.image} />
									</BoxRight>
								</Box>
							)
						})}
					</Column>
				</Container>
			</Boxs>
		</MainDiv>
	)
}