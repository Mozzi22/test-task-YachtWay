import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'
import type { VesselFormData } from '../../../validation/vesselSchema'
import { Ship } from 'lucide-react'
import MultiDropDown from '../../../components/MultiDropDown.tsx'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

const VESSEL_TYPE_OPTIONS = [
  'Container',
  'Bulk',
  'Tanker',
  'General Cargo',
  'Ro-Ro',
  'Passenger',
  'Other'
]

const VesselType = () => {
  const { t } = useTranslation()
  const {
    watch,
    setValue,
    formState: { errors }
  } = useFormContext<VesselFormData>()
  const error = errors.vesselType ? t(errors.vesselType.message as string) : ''

  return (
    <section className="group vessel-type relative mb-[40px]">
      <h2 className="flex items-center gap-2 h-[20px] m-0 mb-5 text-muted text-xs font-medium leading-[18px] uppercase">
        <span className="text-sm">
          <Ship width={20} height={20} />
        </span>
        {t('form.vesselType')}
      </h2>
      <MultiDropDown
        value={watch('vesselType')}
        label={`${t('form.vesselType')}*`}
        options={VESSEL_TYPE_OPTIONS}
        onChange={(value) => setValue('vesselType', value)}
      />
      <p
        className={twMerge(clsx('mt-1 text-xs leading-4 hidden', error && 'block text-danger'))}
        id="vesselType-message"
      >
        {error}
      </p>
    </section>
  )
}

export default VesselType
