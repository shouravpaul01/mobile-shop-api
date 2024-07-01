import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { BrandValidations } from "./brand.validation";
import { BrandControllers } from "./brand.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(BrandValidations.createBrandValidationSchema),
  BrandControllers.createBrandInto
);
router.get('/',BrandControllers.getAllBrands)
router.get('/:brandId',BrandControllers.getSingleBrand)
router.patch('/:brandId',BrandControllers.updateBrandInto)
router.patch('/update-status/:brandId',BrandControllers.updateBrandStatus)

export const BrandRoutes=router