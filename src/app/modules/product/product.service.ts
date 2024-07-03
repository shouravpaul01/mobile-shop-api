import { uploadFileInCloudinary } from "../../utils/uploadFileInCloudinary";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (files:any,payload: TProduct) => {
  const {variants}=payload
  await Promise.all(files.map(async (file: Record<string, unknown>, index: number) => {
    console.log(file.filename)
    const { secure_url }:any = await uploadFileInCloudinary(file.filename as string, file.path as string);
    variants[index].image = secure_url; 
  }));
 
    const result = await Product.create(payload);
    return result;
  };
  const getAllProductsDB = async () => {
    const result = await Product.find({});
    return result;
  };
  const getSingleProductDB = async (productId: string) => {
    const result = await Product.findById(productId);
    return result;
  };
  const updateProductIntoDB = async (
    productId: string,
    payload: Partial<TProduct>
  ) => {
    const result = await Product.findByIdAndUpdate(productId, payload, {
      new: true,
    });
    return result;
  };
  const deleteProductDB = async (productId: string) => {
    const result = await Product.findByIdAndUpdate(
      productId,
      { isDeleted: false },
      { new: true }
    );
    return result;
  };

  export const ProductServices={
    createProductIntoDB,getAllProductsDB,getSingleProductDB,updateProductIntoDB,deleteProductDB
  }