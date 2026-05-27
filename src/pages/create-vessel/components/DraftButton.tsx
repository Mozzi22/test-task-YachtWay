import { useTranslation } from 'react-i18next'
import Button from '../../../components/Button.tsx'

const DraftButton = ({ onSaveDraft }: { onSaveDraft: () => void }) => {
  const { t } = useTranslation()

  return <Button title={t('buttons.saveDrafts')} className="draft-button" onClick={onSaveDraft} />
}
export default DraftButton
