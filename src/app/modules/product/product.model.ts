import { Schema, model } from "mongoose";
import {  TProduct, TVariant } from "./product.interface";

const VariantSchema = new Schema<TVariant>({
    storage: { type: String, required: true },
    colorName: { type: String, required: true },
    colorCode: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true },
    isStock: { type: Boolean}
  });
  
  
  const productSchema = new Schema<TProduct>({
    brand: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
    model: { type: String,unique:true, required: true },
    releaseDate: { type: Date, required: true },
    discount: { type: Number },
    variants: { type: [VariantSchema]},
    specifications: { type: String, required: true },
    shortDescription: { type: String},
    longDescription: { type: String, required: true },
    warranty: { type: String, required: true },
    rating: { type: Schema.Types.Mixed },
    isDeleted:{type:Boolean,default:false}
  });
  
export const Product = model<TProduct>('Product', productSchema);