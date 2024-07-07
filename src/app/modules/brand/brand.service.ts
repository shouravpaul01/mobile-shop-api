import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TBrand } from "./brand.interface";
import { Brand } from "./brand.model";
import { QueryBuilder } from "../../builder/QueryBuilder";
import { searchableFields } from "./brand.constant";

const createBrandIntoDB = async (payload: TBrand) => {
  const isBrandExists = await Brand.findOne({ name: payload.name });
  if (isBrandExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "name",
      "Brand name already exist."
    );
  }
  const result = await Brand.create(payload);
  return result;
};
const getAllBrandsDB = async (query: Record<string, unknown>) => {
 
  const mainQuery = new QueryBuilder(Brand.find({}), query).search(
    searchableFields
  );

  const totalPages = (await mainQuery.totalPages()).totalQuery;
  const brandQuery = mainQuery.paginate();
  const brands = await brandQuery.modelQuery;

  const result = { data: brands, totalPages: totalPages };
  return result;
};
const getSingleBrandDB = async (brandId: string) => {
  const result = await Brand.findById(brandId);
  return result;
};
const updateBrandIntoDB = async (brandId: string, payload: Partial<TBrand>) => {
  const result = await Brand.findByIdAndUpdate(brandId, payload, {
    new: true,
  });
  return result;
};
const updateBrandStatusDB = async (brandId: string, status: string) => {
  const result = await Brand.findByIdAndUpdate(
    brandId,
    { status: status },
    { new: true }
  );
  return result;
};
export const BrandServices = {
  createBrandIntoDB,
  getAllBrandsDB,
  getSingleBrandDB,
  updateBrandIntoDB,
  updateBrandStatusDB,
};
