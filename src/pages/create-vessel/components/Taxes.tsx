import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'
import type { VesselFormData } from '../../../validation/vesselSchema'
import DropDown from '../../../components/DropDown.tsx'
import { Percent } from 'lucide-react'

const TAX_STATUS_OPTIONS = [
  'Tax Paid',
  'Tax Not Paid',
  'VAT Paid',
  'VAT Exempt',
  'Commercial',
  'Private'
]
const IMPORT_DUTY_PAID_OPTIONS = ['Yes', 'No']
const COUNTRY_OF_DUTY_OPTIONS = [
  'United States',
  'United Kingdom',
  'Canada',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Netherlands',
  'Australia'
]

const Taxes = () => {
  const { t } = useTranslation()
  const { setValue, register } = useFormContext<VesselFormData>()

  return (
    <section className="group taxes relative mb-[40px]">
      <h2 className="flex items-center gap-2 h-[20px] m-0 mb-5 text-muted text-xs font-medium leading-[18px] uppercase">
        <span className="text-sm">
          <Percent height="20px" width="20px" />
        </span>
        {t('form.taxes')}
      </h2>
      <div className="row two grid grid-cols-2 gap-5 mb-4">
        <DropDown
          id="taxStatus"
          label={`${t('form.taxStatus')}*`}
          options={TAX_STATUS_OPTIONS}
          {...register('taxStatus')}
          onChange={(value) => setValue('taxStatus', value)}
        />
        <DropDown
          id="importDutyPaid"
          label={`${t('form.importDutyPaid')}*`}
          options={IMPORT_DUTY_PAID_OPTIONS}
          {...register('importDutyPaid')}
          onChange={(value) => setValue('importDutyPaid', value)}
        />
      </div>
      <div className="row two grid grid-cols-2 gap-5">
        <div className="col-span-1">
          <DropDown
            id="countryOfDuty"
            label={`${t('form.countryOfDuty')}*`}
            helpText={t('form.countryOfDutyHint')}
            options={COUNTRY_OF_DUTY_OPTIONS}
            {...register('countryOfDuty')}
            onChange={(value) => setValue('countryOfDuty', value)}
          />
        </div>
        <div />
      </div>
    </section>
  )
}

export default Taxes
