import * as yup from "yup";


export const ratingSchema = yup.object({
    rating: yup.number().required("Avalie com estrelas").min(1, "Selecione pelo menos 1 estrela"),
    comment: yup.string().max(200, "O comentário não pode ultrapassar 200 caracteres").default("")
}).required();