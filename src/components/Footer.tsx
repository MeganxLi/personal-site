import i18next from 'i18next'
import { ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom'

import AboutLink from './AboutLink'

const Footer = ({ homeLink, navigate }:FooterProps) => {
  const { t } = i18next
  return (
    <footer>
      <div className="appear">
        <span>{t('footer.copyright')}</span>
        <AboutLink />
        {navigate && (
        <a href={homeLink} className="a-link">
          <button type="button" className="footer-home">
            Home
            <ChevronUp size={18} />
          </button>
        </a>
        )}
        {!navigate && (
        <Link to={homeLink}>
          <button type="button" className="footer-home">
            Home
            <ChevronUp size={18} />
          </button>
        </Link>
        )}
      </div>
    </footer>
  )
}

export default Footer
