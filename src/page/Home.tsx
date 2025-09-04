import LangSetting from '../constants/LangSetting'

const Home = ({ changeLang, lang }:HomeProps) => {
  const handleLang = () => {
    if (lang === LangSetting.zh){
      changeLang(LangSetting.en)
    } else {
      changeLang(LangSetting.zh)
    }
  }

  return (
    <div id="Home" className="appear">
      <button type="button" className="language-button" onClick={handleLang}>
        <span className={`${lang === LangSetting.zh ? 'checked' : ''}`}>中</span>
        /
        <span className={`${lang === LangSetting.en ? 'checked' : ''}`}>EN</span>
      </button>
    </div>
  )
}

export default Home
