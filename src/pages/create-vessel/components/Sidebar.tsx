import { useTranslation } from 'react-i18next'

export default function Sidebar() {
  const { t } = useTranslation()

  const steps = [
    { key: 'listingContact', icon: '↵', status: 'done' as const },
    { key: 'generalInfo', icon: '♟', status: 'current' as const },
    { key: 'power', icon: '✦', status: 'default' as const },
    { key: 'vesselFeatures', icon: '✣', status: 'default' as const },
    { key: 'accommodation', icon: '▥', status: 'default' as const },
    { key: 'photos', icon: '▣', status: 'default' as const },
    { key: 'videos', icon: '■', status: 'default' as const },
    { key: 'tour3d', icon: '3D', status: 'default' as const, isTour: true },
    { key: 'listingSummary', icon: '≡', status: 'default' as const, isLast: true }
  ]

  return (
    <aside
      className="rail sticky top-0 z-10 flex flex-col w-[324px] shrink-0 h-screen min-h-[800px] pt-[34px] px-10 pb-[38px] text-white rounded-r-sm"
      style={{
        background:
          'linear-gradient(173deg, #08070c 2%, #201235 55%, #1d285a 88%, #002650 114%), #22222d'
      }}
      aria-label="Listing steps"
    >
      <a
        className="brand relative block flex-none w-[156px] h-[38px] text-white font-[Red_Hat_Display] text-[21.958px] font-normal leading-[36.93px] tracking-[1.3175px] no-underline"
        href="#"
        aria-label="Yacht Way"
      >
        <span className="absolute top-0 left-0 whitespace-nowrap">YACHT</span>
        <span className="brand-light absolute top-0 left-[80.19px] whitespace-nowrap font-light">
          WAY
        </span>
        <img
          className="brand-mark absolute left-[78.87px] top-[5.83px] w-[77.13px] h-[25.98px] pointer-events-none"
          src="/assets/logo-subtract.svg"
          alt=""
        />
      </a>

      <nav className="steps flex flex-col mt-[60px] gap-2">
        {steps.map((step) => {
          if (step.status === 'done') {
            return (
              <a
                key={step.key}
                className="step done relative grid grid-cols-[28px_1fr_auto_auto] gap-x-5 items-center w-[244px] min-h-[40px] text-white text-[16px] leading-6 no-underline after:content-[''] after:absolute after:left-[13px] after:top-[34px] after:w-[2px] after:h-[12px] after:rounded-lg after:bg-white/20"
                href="#"
              >
                <span className="step-icon flex items-center justify-center w-7 h-7 text-purple bg-white rounded-[4px] text-[12px] leading-none">
                  {step.icon}
                </span>
                <span>{t(`sidebar.${step.key}`)}</span>
                <span className="step-mark text-white text-sm leading-none">✓</span>
                <span className="step-mark text-white text-sm leading-none">⌁</span>
              </a>
            )
          }

          if (step.status === 'current') {
            return (
              <a
                key={step.key}
                className="step current relative grid grid-cols-[40px_1fr] gap-x-4 items-center w-[244px] min-h-[48px] text-white text-[18px] font-medium leading-[28px] no-underline after:content-[''] after:absolute after:left-[19px] after:top-[42px] after:w-[2px] after:h-[12px] after:rounded-lg after:bg-white/20"
                href="#"
                aria-current="step"
              >
                <span className="step-icon flex items-center justify-center w-10 h-10 text-white bg-white/40 border border-[#f6f6f733] rounded-[4px] text-[12px] leading-none">
                  {step.icon}
                </span>
                <span>{t(`sidebar.${step.key}`)}</span>
              </a>
            )
          }

          const afterClass = step.isLast
            ? ''
            : "after:content-[''] after:absolute after:left-[13px] after:top-[34px] after:w-[2px] after:h-[12px] after:rounded-lg after:bg-white/20"
          const minH = step.isTour ? 'min-h-[48px]' : 'min-h-[40px]'

          return (
            <a
              key={step.key}
              className={`step ${step.isTour ? 'tour' : ''} relative grid grid-cols-[28px_1fr_auto_auto] gap-x-5 items-center w-[244px] ${minH} text-muted text-[16px] leading-6 no-underline ${afterClass}`}
              href="#"
            >
              <span className="step-icon flex items-center justify-center w-7 h-7 text-white/55 bg-white/20 rounded-[4px] text-[12px] leading-none">
                {step.icon}
              </span>
              <span>{t(`sidebar.${step.key}`)}</span>
            </a>
          )
        })}
      </nav>

      <a
        className="create-new mt-auto text-white text-[12px] font-medium leading-[18px] no-underline"
        href="#"
      >
        {t('sidebar.createNewListing')}
      </a>
    </aside>
  )
}
