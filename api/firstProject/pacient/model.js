import mongoose from "mongoose";
import mongooseDelete from 'mongoose-delete';
import { productSchema } from "./schema.js";

productSchema.plugin(mongooseDelete);

export const pacientModel = mongoose.model("pacient", productSchema);
