import i18next from 'i18next'
import { ChevronRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const { t } = i18next
  return (
    <div id="NotFound">
      <div className="home-card">
        <div className="card-face">
          <div className="card-eye">
            <X className="card-eye-x" size={50} />
          </div>
          <div className="card-eye">
            <X className="card-eye-x" size={50} />
          </div>
        </div>
        <h5 className="notfound-title">404 Page Not Found</h5>
        <Link to="/">
          <button type="button" className="notfound-button">
            Home
            <ChevronRight size={14} />
          </button>
        </Link>
      </div>
      <div className="notfound-copyright">{t('footer.copyright')}</div>
    </div>
  )
}

export default NotFound
