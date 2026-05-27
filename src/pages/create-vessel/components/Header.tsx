import { useTranslation } from 'react-i18next'
import './styles.css'
import Snowflake from '../../../accets/Snowflake.png'
import Sun from '../../../accets/Sun.png'
import HelpDot from '../../../components/HelpDot.tsx'
import { type CSSProperties, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type SunStyle = CSSProperties & {
  '--sun-x': string
  '--sun-y': string
  '--sun-size': string
  '--sun-delay': string
}

type HeaderProps = {
  isSubmitEnabled: boolean
  heatProgress: number
  heatPercent: number
  completedRequiredFields: number
  totalRequiredFields: number
}

const SATELLITE_SUNS = [
  { x: 20, y: -16, size: 16, delay: '0s' },
  { x: -15, y: 25, size: 17, delay: '0.14s' },
  { x: -25, y: -10, size: 18, delay: '0.28s' },
  { x: -40, y: 35, size: 19, delay: '0.42s' },
  { x: -30, y: 80, size: 20, delay: '0.42s' },
  { x: 25, y: 60, size: 21, delay: '0.56s' }
] as const

const SUN_APPEARANCE_THRESHOLD = 3

const Header = ({
  isSubmitEnabled,
  heatProgress,
  heatPercent,
  completedRequiredFields,
  totalRequiredFields
}: HeaderProps) => {
  const { t } = useTranslation()

  const [open, setOpen] = useState(false)
  const progressAfterThreshold = Math.max(0, completedRequiredFields - SUN_APPEARANCE_THRESHOLD)
  const availableProgressSteps = Math.max(1, totalRequiredFields - SUN_APPEARANCE_THRESHOLD)
  const visibleSuns = Math.min(
    SATELLITE_SUNS.length,
    Math.ceil((progressAfterThreshold / availableProgressSteps) * SATELLITE_SUNS.length)
  )

  return (
    <header className="flex justify-between min-h-[40px]  page-header">
      <h1 id="page-title" className="m-0 text-[28px] font-medium leading-[40px]">
        {t('header.generalInfo')}
      </h1>
      <div
        className={clsx(
          'relative status py-1 pr-2 pl-1 text-sm leading-6',
          isSubmitEnabled && 'status--sun'
        )}
        style={
          {
            '--heat-progress': heatProgress,
            '--heat-percent': `${heatPercent}%`
          } as CSSProperties
        }
      >
        <div className="status-atmosphere" aria-hidden="true">
          {SATELLITE_SUNS.map((sun, index) => (
            <img
              key={`${sun.x}-${sun.y}`}
              className={clsx('status-atmosphere__sun', index < visibleSuns && 'is-visible')}
              src={Sun}
              alt=""
              style={
                {
                  '--sun-x': `${sun.x}px`,
                  '--sun-y': `${sun.y}px`,
                  '--sun-size': `${sun.size}px`,
                  '--sun-delay': sun.delay
                } as SunStyle
              }
            />
          ))}
        </div>
        <img className="icon status__icon" src={isSubmitEnabled ? Sun : Snowflake} alt="status" />
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
