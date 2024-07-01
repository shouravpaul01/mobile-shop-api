import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const addCategoryIntoDB = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};
const getAllCategoriesDB = async () => {
  const result = await Category.find({});
  return result;
};
const getSingleGategoryDB = async (categoryId: string) => {
  const result = await Category.findById(categoryId);
  return result;
};
const updateCategoryIntoDB = async (
  categoryId: string,
  payload: Partial<TCategory>
) => {
  const result = await Category.findByIdAndUpdate(categoryId, payload, {
    new: true,
  });
  return result;
};
const updateCategoryStatusDB = async (categoryId: string, status: string) => {
  const result = await Category.findByIdAndUpdate(
    categoryId,
    { status: status },
    { new: true }
  );
  return result;
};
export const CategoryServices = {
  addCategoryIntoDB,
  getAllCategoriesDB,
  getSingleGategoryDB,
  updateCategoryIntoDB,
  updateCategoryStatusDB,
};
