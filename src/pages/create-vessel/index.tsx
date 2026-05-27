import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { useEffect } from 'react'
import Availability from './components/Availability'
import CreateModelModal from './components/CreateModelModal'
import DraftButton from './components/DraftButton'
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
  vesselType: '',
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

const CreateVesselPage = () => {
  const methods = useForm<VesselFormData>({
    resolver: yupResolver(vesselSchema),
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
  useEffect(() => {
    const segmentedGroups = Array.from(document.querySelectorAll<HTMLElement>('[data-segmented]'))

    const listeners = segmentedGroups.map((group) => {
      const handler = (event: Event) => {
        const target = event.target as HTMLElement | null
        const button = target?.closest<HTMLButtonElement>('button[data-value]')
        const key = group.dataset.segmented

        if (!button || !key) {
          return
        }

        if (key === 'condition') {
          methods.setValue('condition', button.dataset.value as VesselFormData['condition'], {
            shouldValidate: true
          })
        }

        if (key === 'availability') {
          methods.setValue('availability', button.dataset.value as VesselFormData['availability'], {
            shouldValidate: true
          })
        }

        if (key === 'priceMode') {
          methods.setValue('priceMode', button.dataset.value as VesselFormData['priceMode'], {
            shouldValidate: true
          })
        }
      }

      group.addEventListener('click', handler)

      return () => group.removeEventListener('click', handler)
    })

    return () => {
      listeners.forEach((cleanup) => cleanup())
    }
  }, [methods])

  return (
    <FormProvider {...methods}>
      <main
        className="screen vessel-page relative grid w-full min-h-screen bg-surface lg:grid-cols-[324px_minmax(0,1fr)]"
        aria-labelledby="page-title"
      >
        <Sidebar />
        <div className="vessel-page__main relative flex min-w-0 flex-col">
          <DraftButton />
          <section
            className="content relative mx-auto w-full max-w-[564px] px-5 py-16 lg:px-0 lg:pb-[52px]"
            aria-label="General info form"
          >
            <Header />
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
