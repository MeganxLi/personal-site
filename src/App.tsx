import { useLayoutEffect, useState } from 'react'

import Footer from './components/Footer'
import LangSetting from './constants/LangSetting'
import i18next from './i18n'
import About from './page/About'
import Home from './page/Home'
import Portfolio from './page/Portfolio'
import Skills from './page/Skills'
import Works from './page/Works'

function App() {
  const [lang, setLang] = useState<string>(LangSetting.zh) // 英:true

  const changeLang = (value:string) => {
    i18next.changeLanguage(value)
    setLang(value)
    localStorage.setItem('language', JSON.stringify(value))
  }

  useLayoutEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('language')!)
    const getLocalLang = getLocal || LangSetting.zh

    i18next.changeLanguage(getLocalLang)
    setLang(getLocalLang)
  }, [])

  return (
    <>
      <Home changeLang={changeLang} lang={lang} />
      <About />
      <Skills />
      <Works />
      <Portfolio />
      <Footer homeLink="#Home" />
    </>
  )
}

export default App
