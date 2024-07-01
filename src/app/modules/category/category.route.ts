import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";

import { CategoryControllers } from "./cateory.controller";
import { createCategoryValidationSchema } from "./category.validation";
const router = express.Router();

router.post(
  "/",
  validateRequest(createCategoryValidationSchema),
  CategoryControllers.addCategoryInto
);
router.get('/',CategoryControllers.getAllCategories)
router.get('/:categoryId',CategoryControllers.getSingleGategory)
router.patch('/:categoryId',CategoryControllers.updateCategoryInto)
router.patch('/update-status/:categoryId',CategoryControllers.updateCategoryStatus)

export const CategoryRoutes=router