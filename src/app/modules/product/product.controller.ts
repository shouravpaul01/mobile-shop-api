import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ProductServices } from "./product.service";

const createProductInto = catchAsync(async (req, res) => {
  
   const result = await ProductServices.createProductIntoDB(req.files,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully product added.",
    data: result,
  });
});
const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully retrived all products.",
    data: result,
  });
});
const getSingleProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductServices.getSingleProductDB(productId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully retrived product.",
    data: result,
  });
});
const updateProductInto = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductServices.updateProductIntoDB(productId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully product updated.",
    data: result,
  });
});
const deleteProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductServices.deleteProductDB(productId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully updated product status.",
    data: result,
  });
});

export const ProductControllers = {
  createProductInto,
  getAllProducts,
  getSingleProduct,
  updateProductInto,
  deleteProduct,
};
