import { useTranslation } from 'react-i18next'
import './styles.css'
import Snowflake from '../../../accets/Snowflake.png'
import Sun from '../../../accets/Sun.png'
import HelpDot from '../../../components/HelpDot.tsx'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

const Header = ({ isSubmitEnabled }: { isSubmitEnabled: boolean }) => {
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)

  return (
    <header className="flex justify-between min-h-[40px]  page-header">
      <h1 id="page-title" className="m-0 text-[28px] font-medium leading-[40px]">
        {t('header.generalInfo')}
      </h1>
      <div
        className={`relative status py-1 pr-2 pl-1 text-sm leading-6 ${isSubmitEnabled ? 'status--sun' : ''}`}
      >
        <img className="icon" src={isSubmitEnabled ? Sun : Snowflake} alt="status" />
        <span className="text-ink-2">
          {t('header.listingHeat')}&nbsp;
          <strong className="text-border-strong font-semibold">
            {t(`header.${isSubmitEnabled ? 'warm' : 'freezing'}`)}
          </strong>
        </span>
        <HelpDot open={open} setOpen={setOpen} className="static" />
        <p
          className={twMerge(
            clsx(
              'absolute left-0 top-full mt-2 bg-surface text-xs leading-4 hidden',
              open && 'block text-muted'
            )
          )}
          id="good-for-message"
        >
          {t('header.listingHeatHint')}
        </p>
      </div>
    </header>
  )
}

export default Header
