import * as yup from "yup";
import { ratingSchema } from "./schemas/AdddRatingSchemas";

export type AddRatingFormData = yup.InferType<typeof ratingSchema>;
