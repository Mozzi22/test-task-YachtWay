import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'
import type { VesselFormData } from '../../../validation/vesselSchema'
import DropDownWithoutOptions from '../../../components/DropDownWithoutOptions.tsx'
import Input from '../../../components/Input.tsx'
import Button from '../../../components/Button.tsx'
import { useExternalDomFieldSync } from '../../../hooks/useExternalDomFieldSync.ts'

const VesselDetails = () => {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors }
  } = useFormContext<VesselFormData>()

  useExternalDomFieldSync('hullNumber', '#hull-number')

  return (
    <section className="group vessel-details relative mb-[40px]">
      <h2 className="flex items-center gap-2 h-[20px] m-0 mb-5 text-muted text-[14px] font-medium leading-[18px] uppercase">
        <span className="text-sm">⚓</span> {t('form.vesselDetails')}
      </h2>

      <div className="row two grid grid-cols-2 gap-5 mb-5">
        <DropDownWithoutOptions
          id="make"
          syncField="make"
          error={errors.make ? t(errors.make.message as string) : ''}
          label={`${t('form.make')}*`}
          {...register('make')}
        />
        <DropDownWithoutOptions
          id="model"
          syncField="model"
          error={errors.model ? t(errors.model.message as string) : ''}
          label={`${t('form.model')}*`}
          {...register('model')}
        />
      </div>

      <div className="row two grid grid-cols-2 gap-5 mb-5">
        <DropDownWithoutOptions
          id="year"
          syncField="year"
          error={errors.year ? t(errors.year.message as string) : ''}
          label={`${t('form.year')}*`}
          {...register('year')}
        />
        <Input
          id="hull-number"
          label={`${t('form.hullNumber')}*`}
          error={errors.hullNumber ? t(errors.hullNumber.message as string) : ''}
          helpText={t('form.hullHint')}
          {...register('hullNumber')}
        />
      </div>

      <Input
        className="mb-5"
        id="internalId"
        label={t('form.internalId')}
        error={errors.internalId ? t(errors.internalId.message as string) : ''}
        helpText={t('form.internalIdHint')}
        {...register('internalId')}
      />

      <div className="row two grid grid-cols-2 gap-5 mb-5">
        <Input
          id="currentName"
          label={t('form.currentName')}
          error={errors.currentName ? t(errors.currentName.message as string) : ''}
          {...register('currentName')}
        />
        <Input
          id="launchName"
          label={t('form.launchName')}
          error={errors.launchName ? t(errors.launchName.message as string) : ''}
          {...register('launchName')}
        />
      </div>

      <div className="row two segmented grid grid-cols-2 gap-5 mb-0" data-segmented="condition">
        <Button data-value="new" title={t('buttons.new')} />
        <Button data-value="pre-owned" title={t('buttons.preOwned')} />
      </div>
    </section>
  )
}

export default VesselDetails
