import React, { useEffect, useState } from 'react'
import { BackToTopButton } from './styled'

export const BackToTop = () => {
	const [showButton, setShowButton] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setShowButton(window.scrollY > 300)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<BackToTopButton onClick={scrollToTop} $show={showButton}>
			↑ Top
		</BackToTopButton>
	)
}

