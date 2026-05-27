import { useTranslation } from 'react-i18next'
import Button from '../../../components/Button.tsx'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const FormActions = () => {
  const { t } = useTranslation()

  return (
    <div className="actions flex gap-4 mt-6">
      <Button
        title={
          <div className="flex items-center gap-2">
            <ArrowLeft width="18px" /> {t('buttons.back')}
          </div>
        }
        className="back min-w-[112px] h-10 px-4 text-ink bg-white border border-transparent font-medium rounded-[4px] text-sm leading-[20px]"
      />
      <Button
        type="submit"
        title={
          <div className="flex items-center gap-2">
            {t('buttons.saveNext')} <ArrowRight width="18px" />
          </div>
        }
        className="save w-full flex items-center justify-center min-w-[112px] h-10 px-4 text-white bg-purple border border-purple rounded-[4px] font-medium text-sm leading-[20px]"
      />
    </div>
  )
}

export default FormActions
