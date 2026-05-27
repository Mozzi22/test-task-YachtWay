import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'
import type { VesselFormData } from '../../../validation/vesselSchema'
import HelpDot from '../../../components/HelpDot.tsx'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import MultiDropDown from '../../../components/MultiDropDown.tsx'
import { Shapes } from 'lucide-react'

const GoodFor = () => {
  const { t } = useTranslation()
  const { watch, setValue } = useFormContext<VesselFormData>()

  const [open, setOpen] = useState(false)

  return (
    <section className="group good-for relative mb-10">
      <h2 className="flex items-center gap-2 h-[20px] m-0 mb-5 text-muted text-[14px] font-medium leading-[18px] uppercase">
        <span className="text-sm">
          <Shapes width="20px" height="20px" />
        </span>
        {t('form.goodFor')} <HelpDot open={open} setOpen={setOpen} className="static" />
      </h2>

      <MultiDropDown
        value={watch('goodForCategories') ?? []}
        label={t('form.category')}
        options={['Watersports', 'Fishing', 'Transport', 'Leisure', 'Investment']}
        onChange={(value) =>
          setValue('goodForCategories', value, {
            shouldValidate: true
          })
        }
      />
      <p
        className={twMerge(clsx('hint leading-4 hidden', open && 'block text-muted'))}
        id="good-for-message"
      >
        {t('form.goodForHint')}
      </p>
    </section>
  )
}

export default GoodFor
