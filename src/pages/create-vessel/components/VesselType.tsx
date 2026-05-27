import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'
import type { VesselFormData } from '../../../validation/vesselSchema'
import DropDownWithoutOptions from '../../../components/DropDownWithoutOptions.tsx'
import Counter from '../../../components/Counter.tsx'
import { Ship } from 'lucide-react'

const VesselType = () => {
  const { t } = useTranslation()
  const { register } = useFormContext<VesselFormData>()

  return (
    <section className="group vessel-type relative mb-[40px]">
      <h2 className="flex items-center gap-2 h-[20px] m-0 mb-5 text-muted text-xs font-medium leading-[18px] uppercase">
        <span className="text-sm">
          <Ship width={20} height={20} />
        </span>
        {t('form.vesselType')}
      </h2>
      <DropDownWithoutOptions
        id="vesselType"
        error={''}
        // error={errors.vesselType ? t(errors.vesselType.message as string) : ''}
        label={`${t('form.vesselType')}*`}
        rightSlot={<Counter current={0} max={4} />}
        {...register('vesselType')}
      />
    </section>
  )
}

export default VesselType
