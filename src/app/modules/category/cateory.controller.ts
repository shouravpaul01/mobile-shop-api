import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { CategoryServices } from "./category.service";

const addCategoryInto = catchAsync(async (req, res) => {
  const result = await CategoryServices.addCategoryIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully category added.",
    data: result,
  });
});
const getAllCategories = catchAsync(async (req, res) => {
  const result = await CategoryServices.getAllCategoriesDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully retrived all categories.",
    data: result,
  });
});
const getSingleGategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;
  const result = await CategoryServices.getSingleGategoryDB(categoryId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully retrived category.",
    data: result,
  });
});
const updateCategoryInto = catchAsync(async (req, res) => {
  const { categoryId } = req.params;
  const result = await CategoryServices.updateCategoryIntoDB(
    categoryId,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully category updated.",
    data: result,
  });
});
const updateCategoryStatus = catchAsync(async (req, res) => {
  const { categoryId } = req.params;
  const { status } = req.query;
  const result = await CategoryServices.updateCategoryStatusDB(
    categoryId,
    status as string
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    status: true,
    message: "Successfully updated category status.",
    data: result,
  });
});
export const CategoryControllers = {
  addCategoryInto,
  getAllCategories,
  getSingleGategory,
  updateCategoryInto,
  updateCategoryStatus,
};
