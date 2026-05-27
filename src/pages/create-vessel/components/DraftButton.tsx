import { useTranslation } from 'react-i18next'
import Button from '../../../components/Button.tsx'

const DraftButton = () => {
  const { t } = useTranslation()

  return <Button title={t('buttons.saveDrafts')} className="draft-button" />
}
export default DraftButton
