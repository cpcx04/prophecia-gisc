import mongoose from "mongoose";
import { productSchema } from "./schema.js";

export const pacientModel = mongoose.model("pacient", productSchema);
