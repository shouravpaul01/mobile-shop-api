import { z } from "zod";

const createBrandValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "The field is required." }),
  })
});
const updateBrandValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
  })
});
export const BrandValidations = {
  createBrandValidationSchema,
  updateBrandValidationSchema,
};
