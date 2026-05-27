import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'
import type { VesselFormData } from '../../../validation/vesselSchema'
import DropDownCalendar from '../../../components/DropDownCalendar.tsx'
import clsx from 'clsx'
import { ClipboardList } from 'lucide-react'

const WARRANTY_ITEMS = [
  { nameKey: 'general', field: 'generalWarrantyDate' as const, toggle: 'generalWarranty' },
  { nameKey: 'engine', field: 'engineWarrantyDate' as const, toggle: 'engineWarranty' },
  { nameKey: 'hull', field: 'hullWarrantyDate' as const, toggle: 'hullWarranty' },
  { nameKey: 'generator', field: 'generatorWarrantyDate' as const, toggle: 'generatorWarranty' }
] as const
type TWarrantyItem = (typeof WARRANTY_ITEMS)[number]

const WarrantyItem = ({ item }: { item: TWarrantyItem }) => {
  const { t } = useTranslation()
  const { watch, setValue } = useFormContext<VesselFormData>()

  const isEnabled = watch(`${item.field}Enabled`)
  const value = watch(item.field)

  return (
    <article
      className={clsx(
        'warranty-card rounded grid gap-5 grid-cols-[1fr_auto_auto] items-center text-sm text-ink pb-2 mt-2',
        !isEnabled && 'is-disabled'
      )}
    >
      <div className="flex flex-col">
        <p className="m-0 text-[#22222d] font-normal text-[16px] leading-[24px]">
          {t(`warrantyNames.${item.nameKey}`)}&nbsp;
          <span className="font-normal text-muted">{t('form.warranty')}</span>
        </p>
      </div>

      <div className="datebox">
        <DropDownCalendar
          id={item.field}
          value={value ?? ''}
          disabled={!isEnabled}
          label={t('form.expirationDate')}
          setValue={(date) =>
            setValue(item.field, date, {
              shouldValidate: true
            })
          }
        />
      </div>

      <button
        className={clsx(
          'toggle relative w-9 h-5 rounded-full flex items-center px-0.5 transition-colors border-0 outline-none',
          !isEnabled && 'is-off'
        )}
        type="button"
        data-toggle={item.toggle}
        aria-label={`${t(`warrantyNames.${item.nameKey}`)} ${t('form.warranty')} enabled`}
        onClick={() =>
          setValue(`${item.field}Enabled`, !isEnabled, {
            shouldValidate: true
          })
        }
      >
        <span className="block w-4 h-4 bg-white rounded-full transition-transform" />
      </button>
    </article>
  )
}

const Warranties = () => {
  const { t } = useTranslation()

  return (
    <section className="group warranties relative mb-10">
      <h2 className="flex items-center gap-2 h-[20px] m-0 mb-5 text-muted text-[14px] font-medium leading-[18px] uppercase">
        <span className="text-sm">
          <ClipboardList width={20} height={20} />
        </span>
        {t('form.warranties')}
      </h2>
      <div className="warranty-list flex flex-col gap-[12px]">
        {WARRANTY_ITEMS.map((item) => (
          <WarrantyItem key={item.nameKey} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Warranties
