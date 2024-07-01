import { Schema, model } from "mongoose";
import { TBrand } from "./brand.interface";



const brandSchema = new Schema<TBrand>(
    {
      name: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      description: {
        type: String,
        trim: true
      },
      status:{
        type:Boolean,
        default: true
    }
    }, 
    {
      timestamps: true
    })

    export const Brand=model<TBrand>('Brand',brandSchema)