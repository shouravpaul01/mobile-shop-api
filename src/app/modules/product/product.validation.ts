import { z } from "zod";

const VariantSchema = z.object({
  storage: z.string({ required_error: "The field is required." }),
  colorName: z.string({ required_error: "The field is required." }),
  colorCode: z.string({ required_error: "The field is required." }),
  price: z
    .number({required_error:"The field is required."})
    .min(0, { message: "Price is required and must be a positive number" }),
  quantity: z
    .number({required_error:"The field is required."})
    .min(0, {
      message: "Quantity is required and must be a non-negative number",
    }),
  images: z.string({required_error:"The field is required."})
});

const createProductValidationSchema = z.object({
  brand: z.string({ required_error: "The field is required." }),
  model: z.string({ required_error: "The field is required." }),
  releaseDate: z.date({
    required_error: "The field is required.",
    invalid_type_error: "Invalid Date formet.",
  }),
  discount: z
    .number({
      required_error: "The field is required.",
      invalid_type_error: "Invalid Discount.",
    })
    .min(0)
    .max(100)
    .optional(),
  variants: z.array(VariantSchema),
  specifications: z.string({ required_error: "The field is required." }),
  shortDescription: z.string({ required_error: "The field is required." }).optional(),
  longDescription: z.string({ required_error: "The field is required." }),
  warranty: z.string({ required_error: "The field is required." }),
  rating: z.any().optional(),
});
const updateProductValidationSchema = z.object({
    brand: z.string({ required_error: "The field is required." }).optional(),
    model: z.string({ required_error: "The field is required." }).optional(),
    releaseDate: z.date({
      required_error: "The field is required.",
      invalid_type_error: "Invalid Date formet.",
    }).optional(),
    discount: z
      .number({
        required_error: "The field is required.",
        invalid_type_error: "Invalid Discount.",
      })
      .min(0)
      .max(100)
      .optional(),
    variants: z.array(VariantSchema).optional(),
    specifications: z.string({ required_error: "The field is required." }).optional(),
    shortDescription: z.string({ required_error: "The field is required." }).optional(),
    longDescription: z.string({ required_error: "The field is required." }).optional(),
    warranty: z.string({ required_error: "The field is required." }).optional(),
    rating: z.any().optional(),
  });
export { VariantSchema, createProductValidationSchema,updateProductValidationSchema };
