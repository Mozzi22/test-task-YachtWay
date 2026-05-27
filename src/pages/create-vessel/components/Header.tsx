import { useTranslation } from 'react-i18next'
import './styles.css'

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className="flex justify-between min-h-[40px] mb-[24px]">
      <h1 id="page-title" className="m-0 text-[28px] font-medium leading-[40px]">
        {t('header.generalInfo')}
      </h1>
      <div className="status py-1 pr-2 pl-1 text-sm leading-6">
        <span className="snow">✳</span>
        <span className="text-ink-2">
          {t('header.listingHeat')}{' '}
          <strong className="text-border-strong font-semibold">{t('header.freezing')}</strong>
        </span>
        <span className="help-dot">?</span>
      </div>
    </header>
  )
}

export default Header
