import { useTranslation } from 'react-i18next'
import {
  Camera,
  Check,
  ClipboardList,
  Handshake,
  Pencil,
  ShelvingUnit,
  Ship,
  Sparkles,
  Video,
  Zap
} from 'lucide-react'

const Sidebar = ({ onResetForm }: { onResetForm: () => void }) => {
  const { t } = useTranslation()

  const steps = [
    { key: 'listingContact', icon: <Handshake width={16} height={16} />, status: 'done' as const },
    { key: 'generalInfo', icon: <Ship width={16} height={16} />, status: 'current' as const },
    { key: 'power', icon: <Zap width={16} height={16} />, status: 'default' as const },
    {
      key: 'vesselFeatures',
      icon: <Sparkles width={16} height={16} />,
      status: 'default' as const
    },
    {
      key: 'accommodation',
      icon: <ShelvingUnit width={16} height={16} />,
      status: 'default' as const
    },
    { key: 'photos', icon: <Camera width={16} height={16} />, status: 'default' as const },
    { key: 'videos', icon: <Video width={16} height={16} />, status: 'default' as const },
    { key: 'tour3d', icon: '3D', status: 'default' as const },
    {
      key: 'listingSummary',
      icon: <ClipboardList width={16} height={16} />,
      status: 'default' as const,
      isLast: true
    }
  ]

  return (
    <aside className="rail " aria-label="Listing steps">
      <a
        className="brand relative block flex-none w-[156px] h-[38px] text-surface font-[Red_Hat_Display] text-[21.96px] font-normal leading-[36.93px] tracking-[1.3175px] no-underline"
        href="#"
        // todo main path
        aria-label="Yacht Way"
      >
        <span className="absolute top-0 left-0 whitespace-nowrap">YACHT</span>
        <span className="brand-light absolute top-0 left-[80.19px] whitespace-nowrap font-light">
          WAY
        </span>
        <img
          className="brand-mark absolute left-[78.87px] top-[5.83px] w-[77.13px] h-[25.98px] pointer-events-none"
          src="/assets/logo-subtract.svg"
          alt="Logo"
        />
      </a>

      <nav className="steps flex flex-col mt-[28px] gap-5">
        {steps.map((step) => (
          <button
            key={step.key}
            type="button"
            className="step"
            data-state={step.status}
            data-no-after={step?.isLast ? 'true' : 'false'}
            disabled={step.status !== 'done'}
            // onClick={() => handleStepClick(step.key)}
          >
            <span className="step-icon">{step.icon}</span>
            <span>{t(`sidebar.${step.key}`)}</span>
            {step.status === 'done' && (
              <div className="flex items-center justify-end gap-1">
                <Check width={16} height={16} className="text-surface/40" />
                <Pencil width={16} height={16} />
              </div>
            )}
          </button>
        ))}
      </nav>

      <button
        className="create-new mt-auto cursor-pointer flex text-surface text-[14px] font-medium leading-[20px]"
        onClick={onResetForm}
      >
        {t('sidebar.createNewListing')}
      </button>
    </aside>
  )
}

export default Sidebar
