import * as yup from 'yup';
import {confirmPasswordFor, passwordSchema, simplePasswordSchema} from "./HelpersSchemas.ts";


export const loginSchema = yup.object({
    email: yup.string().email("Email inválido").required("O email é obrigatório"),
    password: simplePasswordSchema,
});


export const registerSchema = loginSchema.shape({
    name: yup
        .string()
        .required("O primeiro nome é obrigatório").min(3, "O nome deve conter ao menos 3 letras")
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "Apenas letras são permitidas"),

    password: passwordSchema,

    confirm_password: confirmPasswordFor("password"),
});

export const changePasswordSchema = yup.object({
    old_password: simplePasswordSchema,
    new_password: passwordSchema,
    confirm_password: confirmPasswordFor("new_password"),
})
