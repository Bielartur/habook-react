import * as yup from 'yup';
import {passwordSchema} from "./HelpersSchemas.ts";


export const loginSchema = yup.object({
    email: yup.string().email("Email inválido").required("O email é obrigatório"),
    password: yup
        .string()
        .required("A senha é obrigatória")
        .min(8, "A senha deve ter no mínimo 8 caracteres")
        .test(
            "not-numeric-only",
            "A senha não pode conter apenas números.",
            (value) => !/^\d+$/.test(value || "")
        ),
});


export const registerSchema = loginSchema.shape({
    name: yup
        .string()
        .required("O primeiro nome é obrigatório").min(3, "O nome deve conter ao menos 3 letras")
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "Apenas letras são permitidas"),

    password: passwordSchema,

    confirm_password: yup
        .string()
        .required("A confirmação de senha é obrigatória.")
        .test("match", "As senhas devem ser iguais", function (value) {
            return value === this.parent.password;
        }),
});