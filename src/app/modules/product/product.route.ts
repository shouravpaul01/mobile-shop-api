import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import {
  createProductValidationSchema,
  updateProductValidationSchema,
} from "./product.validation";
import { ProductControllers } from "./product.controller";
import { upload } from "../../middlewares/uploadFileHandler";
import { parseDataHandler } from "../../middlewares/parseDataHandler";
const router = express.Router();

router.post(
  "/",upload.array('files',5),parseDataHandler,ProductControllers.createProductInto
);
router.get("/", ProductControllers.getAllProducts);
router.get("/:productId", ProductControllers.getSingleProduct);
router.patch(
  "/:productId",
  upload.array('files',5),
  parseDataHandler,
  ProductControllers.updateProductInto
);
router.delete("/:productId", ProductControllers.deleteProduct);

export const ProductRoutes=router
