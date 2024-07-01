import { Schema, model } from "mongoose";
import { TCategory } from "./category.interface";


const categorySchema = new Schema<TCategory>(
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

    export const Category=model<TCategory>('Category',categorySchema)