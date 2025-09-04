import { Fragment } from 'react'

import i18next from 'i18next'
import { Calendar } from 'lucide-react'

import WorksSetting from '../constants/WorksSetting'
import { formatYearMonth, calcDuration } from '../until/dateFormat'

const Works = () => {
  const { t } = i18next
  return (
    <div id="Works">
      <div className="appear">
        <h2 className="works-title">{t('Works.title')}</h2>
        <div className="works-content">
          {WorksSetting.map((item) => (
            <div className="works-item" key={item.title}>
              <div className="work-experience">
                <div className="work-name">
                  <h4 className="work-title">{t(`${item.job_title}`)}</h4>
                  <h5 className="work-company">{t(`${item.title}`)}</h5>

                </div>
                <p className="work-year">
                  <Calendar size={16} />
                  {`${formatYearMonth(item.start_year)} - ${formatYearMonth(item.end_year)}`}
                  <span className="work-total-year">
                    {calcDuration(item.start_year, item.end_year)}
                  </span>
                </p>
              </div>
              <ul className="work-description">
                {item.description.map((description) => {
                  if (typeof description === 'string'){
                    return (<li key={description}>{t(`${description}`)}</li>)
                  }
                  return (
                    <Fragment key={description.project}>
                      <p className="description-title">{t(`${description.project}`)}</p>
                      {description.text.map((text) => <li key={text}>{t(`${text}`)}</li>)}
                    </Fragment>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Works
