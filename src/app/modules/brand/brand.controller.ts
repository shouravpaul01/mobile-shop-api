import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BrandServices } from "./brand.service";

const createBrandInto = catchAsync(async (req, res) => {
  const result = await BrandServices.createBrandIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully brand added.",
    data: result,
  });
});
const getAllBrands = catchAsync(async (req, res) => {
  const result = await BrandServices.getAllBrandsDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully retrived all categories.",
    data: result,
  });
});
const getSingleBrand = catchAsync(async (req, res) => {
  const { brandId } = req.params;
  const result = await BrandServices.getSingleBrandDB(brandId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully retrived brand.",
    data: result,
  });
});
const updateBrandInto = catchAsync(async (req, res) => {
  const { brandId } = req.params;
  const result = await BrandServices.updateBrandIntoDB(brandId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully brand updated.",
    data: result,
  });
});
const updateBrandStatus = catchAsync(async (req, res) => {
  const { brandId } = req.params;
  const { status } = req.query;
  const result = await BrandServices.updateBrandStatusDB(
    brandId,
    status as string
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully updated brand status.",
    data: result,
  });
});
export const BrandControllers = {
  createBrandInto,
  getAllBrands,
  getSingleBrand,
  updateBrandInto,
  updateBrandStatus,
};
