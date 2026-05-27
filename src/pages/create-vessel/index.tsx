import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { type CSSProperties, useEffect } from 'react'
import Availability from './components/Availability'
import CreateModelModal from './components/CreateModelModal'
import FormActions from './components/FormActions'
import GoodFor from './components/GoodFor'
import Header from './components/Header'
import PriceBlock from './components/PriceBlock'
import Sidebar from './components/Sidebar'
import Taxes from './components/Taxes'
import VesselDetails from './components/VesselDetails'
import VesselLocation from './components/VesselLocation'
import VesselType from './components/VesselType'
import Warranties from './components/Warranties'
import vesselSchema, { type VesselFormData } from '../../validation/vesselSchema'
import DraftButton from './components/DraftButton.tsx'

const defaultValues: VesselFormData = {
  make: '',
  model: '',
  year: '',
  hullNumber: '',
  internalId: '',
  currentName: '',
  launchName: '',
  condition: 'new',
  vesselLocation: '',
  usCitizenRestriction: false,
  vesselType: [],
  availability: 'later',
  completionDate: '',
  goodForCategories: ['Watersports', 'Fishing'],
  priceMode: 'fixed',
  price: '100,000',
  hidePrice: false,
  taxStatus: '',
  importDutyPaid: 'Yes',
  countryOfDuty: '',
  generalWarrantyDateEnabled: true,
  generalWarrantyDate: '08.08.2029',
  engineWarrantyDateEnabled: true,
  engineWarrantyDate: '08.08.2029',
  hullWarrantyDateEnabled: true,
  hullWarrantyDate: '08.08.2029',
  generatorWarrantyDateEnabled: true,
  generatorWarrantyDate: '08.08.2029'
}

const REQUIRED_PROGRESS_FIELDS = [
  'make',
  'model',
  'year',
  'hullNumber',
  'vesselLocation',
  'vesselType',
  'price',
  'importDutyPaid',
  'countryOfDuty'
] as const

const isCompletedValue = (value: unknown) => {
  if (Array.isArray(value)) {
    return value.length > 0
  }

  if (typeof value === 'string') {
    return value.trim().length > 0
  }

  return Boolean(value)
}

const CreateVesselPage = () => {
  const methods = useForm({
    resolver: yupResolver(vesselSchema()),
    defaultValues,
    mode: 'onBlur'
  })
  useEffect(() => {
    // Load app.js after the React component mounts so it can attach its event listeners.
    const script = document.createElement('script')
    script.src = '/app.js'
    script.async = false
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const requiredFieldValues = useWatch({
    control: methods.control
  })

  const completedRequiredFields = REQUIRED_PROGRESS_FIELDS.filter((fieldName) =>
    isCompletedValue(requiredFieldValues?.[fieldName])
  ).length
  const totalRequiredFields = REQUIRED_PROGRESS_FIELDS.length
  const heatProgress = completedRequiredFields / totalRequiredFields
  const heatPercent = Math.round(heatProgress * 100)
  const isSubmitEnabled = methods.formState.isValid

  return (
    <FormProvider {...methods}>
      <main
        className="screen vessel-page relative grid w-full min-h-screen bg-surface lg:grid-cols-[324px_minmax(0,1fr)]"
        aria-labelledby="page-title"
      >
        <Sidebar />
        <div className="vessel-page__main relative flex min-w-0 flex-col">
          <div
            className="top-gradient"
            style={
              {
                '--heat-opacity': String(heatProgress)
              } as CSSProperties
            }
          />
          <DraftButton />
          <section
            className="content relative mx-auto w-full max-w-[564px] px-5 pb-16 lg:px-0 lg:pb-[52px]"
            aria-label="General info form"
          >
            <Header
              isSubmitEnabled={isSubmitEnabled}
              heatProgress={heatProgress}
              heatPercent={heatPercent}
              completedRequiredFields={completedRequiredFields}
              totalRequiredFields={totalRequiredFields}
            />
            <form
              className="form vessel-form flex flex-col gap-0"
              noValidate
              onSubmitCapture={() => {
                void methods.trigger()
              }}
            >
              <VesselDetails />
              <VesselLocation />
              <VesselType />
              <Availability />
              <GoodFor />
              <PriceBlock />
              <Taxes />
              <Warranties />
              <FormActions />
            </form>
          </section>
        </div>
        <CreateModelModal />
      </main>
    </FormProvider>
  )
}

export default CreateVesselPage
