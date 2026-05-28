import * as yup from 'yup'

export const vesselSchema = () =>
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
      internalId: yup.string().defined(),
      currentName: yup.string().defined(),
      launchName: yup.string().defined(),
      condition: yup.mixed<'new' | 'pre-owned'>().oneOf(['new', 'pre-owned']).required(),
      usCitizenRestriction: yup.boolean().defined(),
      availability: yup.mixed<'now' | 'later'>().oneOf(['now', 'later']).required(),
      completionDate: yup.string().defined(),
      goodForCategories: yup.array().of(yup.string().required()).required(),
      priceMode: yup.mixed<'range' | 'fixed'>().oneOf(['range', 'fixed']).required(),
      hidePrice: yup.boolean().defined(),
      taxStatus: yup.string().defined(),
      generalWarrantyDateEnabled: yup.boolean().defined(),
      generalWarrantyDate: yup.string().defined(),
      engineWarrantyDateEnabled: yup.boolean().defined(),
      engineWarrantyDate: yup.string().defined(),
      hullWarrantyDateEnabled: yup.boolean().defined(),
      hullWarrantyDate: yup.string().defined(),
      generatorWarrantyDateEnabled: yup.boolean().defined(),
      generatorWarrantyDate: yup.string().defined()
    })
    .required()

export type VesselFormData = yup.InferType<ReturnType<typeof vesselSchema>>

export default vesselSchema
