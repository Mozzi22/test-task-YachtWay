import { useTranslation } from 'react-i18next'
import Button from '../../../components/Button.tsx'

const DraftButton = () => {
  const { t } = useTranslation()

  return (
    <Button
      title={t('buttons.saveDrafts')}
      className="draft-button absolute top-8 right-[60px] z-20 min-w-[180px] px-5 py-2 border border-border-strong rounded-[4px] text-[12px] font-medium leading-[18px]"
    />
  )
}
export default DraftButton
