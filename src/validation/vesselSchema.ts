import * as yup from 'yup'

const vesselSchema = yup.object({
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
  internalId: yup.string().required('validation.required'),
  currentName: yup.string().required('validation.required'),
  launchName: yup.string().required('validation.required'),
  condition: yup
    .string()
    .oneOf(['new', 'pre-owned'], 'validation.selectOption')
    .required('validation.required'),
  vesselLocation: yup.string().required('validation.required'),
  usCitizenRestriction: yup.boolean().defined(),
  vesselType: yup.string().required('validation.required'),
  availability: yup
    .string()
    .oneOf(['now', 'later'], 'validation.selectOption')
    .required('validation.required'),
  completionDate: yup.string().required('validation.required'),
  goodForCategories: yup
    .array()
    .of(yup.string().required())
    .min(1, 'validation.minCategories')
    .required('validation.required'),
  priceMode: yup
    .string()
    .oneOf(['range', 'fixed'], 'validation.selectOption')
    .required('validation.required'),
  price: yup.string().required('validation.required'),
  hidePrice: yup.boolean().defined(),
  taxStatus: yup.string().required('validation.required'),
  importDutyPaid: yup.string().required('validation.required'),
  countryOfDuty: yup.string().required('validation.required'),
  generalWarrantyDateEnabled: yup.boolean().required('validation.required'),
  generalWarrantyDate: yup.string().required('validation.required'),
  engineWarrantyDateEnabled: yup.boolean().required('validation.required'),
  engineWarrantyDate: yup.string().required('validation.required'),
  hullWarrantyDateEnabled: yup.boolean().required('validation.required'),
  hullWarrantyDate: yup.string().required('validation.required'),
  generatorWarrantyDateEnabled: yup.boolean().required('validation.required'),
  generatorWarrantyDate: yup.string().required('validation.required')
})

export type VesselFormData = yup.InferType<typeof vesselSchema>

export default vesselSchema
