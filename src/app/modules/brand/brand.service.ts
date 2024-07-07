import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TBrand } from "./brand.interface";
import { Brand } from "./brand.model";


const createBrandIntoDB = async (payload: TBrand) => {
  const isBrandExists=await Brand.findOne({name:payload.name})
  if(isBrandExists){
    throw new AppError(httpStatus.NOT_FOUND,"name","Brand name already exist.");
    
  }
  const result = await Brand.create(payload);
  return result;
};
const getAllBrandsDB = async () => {
  const result = await Brand.find({});
  return result;
};
const getSingleBrandDB = async (brandId: string) => {
  const result = await Brand.findById(brandId);
  return result;
};
const updateBrandIntoDB = async (
  brandId: string,
  payload: Partial<TBrand>
) => {
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
