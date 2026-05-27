import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'
import type { VesselFormData } from '../../../validation/vesselSchema'
import DropDownWithoutOptions from '../../../components/DropDownWithoutOptions.tsx'
import Checkbox from '../../../components/Checkbox.tsx'
import { MapPin } from 'lucide-react'

const VesselLocation = () => {
  const { t } = useTranslation()
  const { register } = useFormContext<VesselFormData>()

  return (
    <section className="group vessel-location relative mb-[40px]">
      <h2 className="flex items-center gap-2 h-[20px] m-0 mb-5 text-muted text-xs font-medium leading-[18px] uppercase">
        <span className="text-sm">
          <MapPin width="20px" height="20px" />
        </span>
        {t('form.vesselLocation')}
      </h2>
      <DropDownWithoutOptions
        id="vesselLocation"
        error={''}
        // error={errors.year ? t(errors.year.message as string) : ''}
        label={`${t('form.vesselLocation')}*`}
        helpText={t('form.vesselLocationHint')}
        {...register('vesselLocation')}
      />
      <Checkbox
        label={t('form.usCitizens')}
        className="mt-5"
        {...register('usCitizenRestriction')}
      />
    </section>
  )
}

export default VesselLocation
