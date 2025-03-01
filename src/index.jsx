import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AboutPage, ContactPage, HomePage } from './container'
import { BackToTop, MyFooter, MyHeader } from './component'
import { GlobalStyles } from './styled'
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
