import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'
import type { VesselFormData } from '../../../validation/vesselSchema'
import Checkbox from '../../../components/Checkbox.tsx'
import { MapPin } from 'lucide-react'
import DropDown from '../../../components/DropDown.tsx'

const VESSEL_LOCATION_OPTIONS = ['At Sea', 'In Port', 'Anchored', 'Underway', 'Moored', 'Dry Dock']

const VesselLocation = () => {
  const { t } = useTranslation()
  const {
    setValue,
    register,
    formState: { errors }
  } = useFormContext<VesselFormData>()

  return (
    <section className="group vessel-location relative mb-[40px]">
      <h2 className="flex items-center gap-2 h-[20px] m-0 mb-5 text-muted text-[14px] font-medium leading-[18px] uppercase">
        <span className="text-sm">
          <MapPin width="20px" height="20px" />
        </span>
        {t('form.vesselLocation')}
      </h2>
      <DropDown
        id="vesselLocation"
        label={`${t('form.vesselLocation')}*`}
        options={VESSEL_LOCATION_OPTIONS}
        helpText={t('form.vesselLocationHint')}
        error={errors.vesselLocation ? t(errors.vesselLocation.message as string) : ''}
        {...register('vesselLocation')}
        onChange={(value) => setValue('vesselLocation', value, { shouldValidate: true })}
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
