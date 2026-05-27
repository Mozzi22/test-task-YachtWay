import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'
import type { VesselFormData } from '../../../validation/vesselSchema'
import Button from '../../../components/Button.tsx'
import DropDownCalendar from '../../../components/DropDownCalendar.tsx'
import { Calendar as CalendarIcon } from 'lucide-react'

const Availability = () => {
  const { t } = useTranslation()
  const { watch, register, setValue } = useFormContext<VesselFormData>()

  return (
    <section className="group availability relative mb-10">
      <h2 className="flex items-center gap-2 h-[20px] m-0 mb-5 text-muted text-xs font-medium leading-[18px] uppercase">
        <span className="text-sm">
          <CalendarIcon width={20} height={20} />
        </span>
        {t('form.availability')}
      </h2>
      <div
        className="row two segmented grid grid-cols-2 gap-5 mb-[20px]"
        data-segmented="availability"
      >
        <Button data-value="now" title={t('buttons.availableNow')} />
        <Button data-value="later" title={t('buttons.availableLater')} />
      </div>
      <DropDownCalendar
        id="completion-date"
        value={watch('completionDate')}
        label={t('form.completionDate')}
        setValue={(date) => setValue('completionDate', date)}
        {...register('completionDate')}
      />
    </section>
  )
}

export default Availability
