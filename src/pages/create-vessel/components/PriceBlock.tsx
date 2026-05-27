import { useTranslation } from 'react-i18next'
import { useFormContext } from 'react-hook-form'
import type { VesselFormData } from '../../../validation/vesselSchema'
import Button from '../../../components/Button.tsx'
import HelpDot from '../../../components/HelpDot.tsx'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import Input from '../../../components/Input.tsx'
import CurrencyDropDown from './CurrencyDropDown.tsx'
import { ArrowUp, DollarSign } from 'lucide-react'
import Checkbox from '../../../components/Checkbox.tsx'

const PriceBlock = () => {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors }
  } = useFormContext<VesselFormData>()

  const [open, setOpen] = useState(false)

  return (
    <section className="group price-block relative mb-10">
      <h2 className="flex items-center gap-2 h-[20px] m-0 mb-5 text-muted text-xs font-medium leading-[18px] uppercase">
        <span className="text-sm">
          <DollarSign width="20px" height="20px" />
        </span>
        {t('form.price')}
      </h2>
      <div
        className="row two segmented relative grid grid-cols-2 gap-5 mb-5"
        data-segmented="priceMode"
      >
        <Button
          data-value="range"
          title={
            <>
              {t('buttons.priceRange')} <HelpDot open={open} setOpen={setOpen} className="static" />
            </>
          }
        />
        <Button data-value="fixed" title={t('buttons.fixedPrice')} />
      </div>
      <p
        className={twMerge(clsx('mt-2 text-xs leading-4 hidden', open && 'block text-muted'))}
        id="good-for-message"
      >
        {t('buttons.priceRangeHint')}
      </p>
      <Input
        id="price"
        label={`${t('form.priceLabel')}*`}
        error={errors.price ? t(errors.price.message as string) : ''}
        {...register('price')}
        className="price-input mb-5"
        rightSlot={<CurrencyDropDown />}
      />
      <div className="pb-6 border-b border-[#F1F1F2] mb-6">
        <div className="market flex justify-between gap-5 w-full min-h-[84px] mt-0 p-[12px] bg-surface-alt text-[14px] leading-5 rounded">
          <div className="flex gap-1">
            <ArrowUp width={14} height={16} className="text-[#F79009]" />
            <div>
              <p className="block text-ink-2 font-normal mb-0">
                {t('market.aboveMarketPrefix')}&nbsp;
                <span className="font-medium">{t('market.aboveMarketValue')}</span>&nbsp;
                {t('market.aboveMarketSuffix')}
              </p>
              <p className="m-0 text-muted text-[12px] leading-[18px]">{t('market.compared')}</p>
              <a
                href="https://www.google.com/"
                target="_blank"
                className="text-purple underline hover:text-purple-line"
              >
                {t('market.learnMore')}
              </a>
            </div>
          </div>

          <div>
            <span className="text-muted">{t('market.marketRange')}</span>
            <strong className="block text-[12px] leading-[18px] font-medium mt-0">
              {t('market.rangeValue')}
            </strong>
          </div>
        </div>
      </div>

      <Checkbox label={t('form.hidePrice')} className="mt-5" {...register('hidePrice')} />

      <p className="text-ink-2 text-xs leading-[18px] mt-0 ml-[28px]">
        <strong className="text-[#DC6803] font-semibold">{t('warnings.priceWarningTitle')}</strong>{' '}
        {t('warnings.priceWarning')}
      </p>
    </section>
  )
}

export default PriceBlock
