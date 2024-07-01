import { z } from "zod";

export const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "The field is required." }),
  })
});
const updateCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
  })
});
export const CategoryValidations = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};
