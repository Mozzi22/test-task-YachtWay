import { useTranslation } from 'react-i18next'
import Input from '../../../components/Input.tsx'
import Button from '../../../components/Button.tsx'

const CreateModelModal = () => {
  const { t } = useTranslation()

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#08070c6b]"
      data-modal
      hidden
    >
      <section
        className="model-modal w-full max-w-[440px] p-6 bg-surface rounded-[8px] shadow-[0_24px_80px_rgba(8,7,12,0.28)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="model-modal-title"
      >
        <header className="flex items-center justify-between gap-3 mb-0">
          <h2
            id="model-modal-title"
            className="m-0 text-ink text-[20px] font-medium leading-[28px]"
          >
            {t('modal.createNewModel')}
          </h2>
          <button
            className="modal-close w-8 h-8 text-muted bg-transparent border-0 text-[24px] leading-none flex items-center justify-center"
            type="button"
            aria-label="Close model creation modal"
          >
            ×
          </button>
        </header>
        <p className="modal-copy my-3 mb-[22px] text-muted text-[14px] leading-[20px]">
          {t('modal.modalDescription')}
        </p>
        <label
          className="field modal-field relative block h-[40px] mb-[28px]"
          htmlFor="new-model-name"
        >
          <span className="absolute left-[12px] -top-[8px] z-10 px-1 text-muted bg-surface text-[12px] font-medium leading-[18px]">
            {t('modal.modelName')}*
          </span>
          <Input id="new-model-name" label={`${t('modal.modelName')}*`} />
          <p
            className="field-message hidden absolute left-0 top-[42px] m-0 text-danger text-[12px] leading-[16px]"
            id="new-model-message"
          />
        </label>
        <footer className="flex items-center justify-end gap-[12px] mt-0">
          <Button
            data-cancel-model
            title={t('buttons.cancel')}
            className="secondary-action min-w-[112px] h-[40px] px-[16px] text-ink bg-surface border border-line rounded-[4px] text-[14px] font-medium leading-[20px]"
          />
          <Button
            data-create-model
            title={t('buttons.createModel')}
            className="primary-action min-w-[112px] h-[40px] px-[16px] text-surface bg-purple border border-purple rounded-[4px] text-[14px] font-medium leading-[20px]"
          />
        </footer>
      </section>
    </div>
  )
}

export default CreateModelModal
