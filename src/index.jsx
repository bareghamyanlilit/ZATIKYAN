import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AboutPage, ContactPage, HomePage } from './container'
import { BackToTop, MyFooter, MyHeader } from './component'
import { GlobalStyles } from './styled'
<<<<<<< HEAD
import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import translationEN from './languages/en/translation.json'
import translationRU from './languages/ru/translation.json'
import translationAM from './languages/am/translation.json'

export const MyProject=()=>{
	i18next.use(initReactI18next).init({
		resources: {
			en: {
				translation: translationEN,
			},
			ru: {
				translation: translationRU,
			},
			am: {
				translation: translationAM,
			},
		},
		lng: localStorage.getItem('lang') || 'en',
		fallbackLng: 'ru',
		interpolation: {
			escapeValue: false,
		},
	})
=======
import { OurTeam } from './component/ourTeam'
import { FAQPage } from './component/faq'

export const MyProject = () => {
>>>>>>> fcf2cc2f1182ad0ec954ad5576c6e8bc99194cd6
	return (
		<Router>
			<GlobalStyles />
			<MyHeader />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/ourTeam' element={<OurTeam />} />
				<Route path='/faq' element={<FAQPage />} />
			</Routes>

			<BackToTop />

			<MyFooter />
		</Router>
	)
}
