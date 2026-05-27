import * as yup from 'yup'

export type VesselFormData = {
  make: string
  model: string
  year: string
  hullNumber: string
  vesselLocation: string
  vesselType: string[]
  price: string
  importDutyPaid: string
  countryOfDuty: string
  internalId: string | undefined
  currentName: string | undefined
  launchName: string | undefined
  condition: 'new' | 'pre-owned' | undefined
  usCitizenRestriction: boolean | undefined
  availability: 'now' | 'later' | undefined
  completionDate: string | undefined
  goodForCategories: string[] | undefined
  priceMode: 'range' | 'fixed' | undefined
  hidePrice: boolean | undefined
  taxStatus: string | undefined
  generalWarrantyDateEnabled: boolean | undefined
  generalWarrantyDate: string | undefined
  engineWarrantyDateEnabled: boolean | undefined
  engineWarrantyDate: string | undefined
  hullWarrantyDateEnabled: boolean | undefined
  hullWarrantyDate: string | undefined
  generatorWarrantyDateEnabled: boolean | undefined
  generatorWarrantyDate: string | undefined
}

export const vesselSchema = (): yup.ObjectSchema<VesselFormData> =>
  yup
    .object({
      make: yup.string().required('validation.required'),
      model: yup.string().required('validation.required'),
      year: yup
        .string()
        .required('validation.required')
        .matches(/^\d{4}$/, 'validation.invalidYear')
        .test('valid-year', 'validation.invalidYear', (val) => {
          if (!val) return false
          const n = Number(val)
          return n >= 1900 && n <= 2100
        }),
      hullNumber: yup.string().required('validation.required').max(20, 'validation.maxLength'),
      vesselLocation: yup.string().required('validation.required'),
      vesselType: yup
        .array()
        .of(yup.string().required())
        .min(1, 'validation.minCategories')
        .required('validation.required'),
      price: yup.string().required('validation.required'),
      importDutyPaid: yup.string().required('validation.required'),
      countryOfDuty: yup.string().required('validation.required'),
      internalId: yup.string().optional(),
      currentName: yup.string().optional(),
      launchName: yup.string().optional(),
      condition: yup.mixed<'new' | 'pre-owned'>().oneOf(['new', 'pre-owned']).optional(),
      usCitizenRestriction: yup.boolean().optional(),
      availability: yup.mixed<'now' | 'later'>().oneOf(['now', 'later']).optional(),
      completionDate: yup.string().optional(),
      goodForCategories: yup.array().of(yup.string().required()).optional(),
      priceMode: yup.mixed<'range' | 'fixed'>().oneOf(['range', 'fixed']).optional(),
      hidePrice: yup.boolean().optional(),
      taxStatus: yup.string().optional(),
      generalWarrantyDateEnabled: yup.boolean().optional(),
      generalWarrantyDate: yup.string().optional(),
      engineWarrantyDateEnabled: yup.boolean().optional(),
      engineWarrantyDate: yup.string().optional(),
      hullWarrantyDateEnabled: yup.boolean().optional(),
      hullWarrantyDate: yup.string().optional(),
      generatorWarrantyDateEnabled: yup.boolean().optional(),
      generatorWarrantyDate: yup.string().optional()
    })
    .required()

export default vesselSchema
