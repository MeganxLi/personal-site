import i18next from 'i18next'
import { ChevronUp } from 'lucide-react'

import AboutLink from './AboutLink'

const Footer = ({ homeLink }:FooterProps) => {
  const { t } = i18next
  return (
    <footer>
      <div className="appear">
        <span>{t('footer.copyright')}</span>
        <AboutLink />
        <a href={homeLink}>
          <button type="button" className="footer-home">
            Home
            <ChevronUp size={18} />
          </button>
        </a>
      </div>
    </footer>
  )
}

export default Footer
