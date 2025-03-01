import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AboutPage, ContactPage, HomePage } from './container'
import { BackToTop, MyFooter, MyHeader } from './component'
import { GlobalStyles } from './styled'

export const MyProject=()=>{
	return (
		<Router>
			<GlobalStyles />
			<MyHeader />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contact' element={<ContactPage />} />
			</Routes>

			<BackToTop />
			
			<MyFooter />
		</Router>
	)
}
