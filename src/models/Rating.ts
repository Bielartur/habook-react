import * as yup from "yup";
import { ratingSchema } from "./schemas/AdddRatingSchemas";

export type AddRatingFormData = yup.InferType<typeof ratingSchema>;

export type RatingData = {
    nota: number;
    comentario: string;
}