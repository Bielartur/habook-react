import * as yup from "yup";

const SPECIALS = `~!@#$%^&*()_+{}":;'[]<>?/|\\`; // igual ao Django

const escapeForCharClass = (s: string) =>
    s.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");

const SPECIALS_CLASS = escapeForCharClass(SPECIALS);

// Lista simples de “common passwords” (você pode expandir/usar sua própria lista)
// No Django isso vem de um dataset; no front você precisa manter uma lista.
const COMMON_PASSWORDS = new Set([
    "password",
    "12345678",
    "123456789",
    "qwerty",
    "admin",
    "senha",
    "senha123",
    "123456",
    "11111111",
]);

const hasMinCount = (re: RegExp, min: number) => (value: string) =>
    (value.match(re)?.length ?? 0) >= min;

export const normalize = (s: string) =>
    s
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

export const passwordSchema = yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .test("not-only-numeric", "A senha não pode conter apenas números", (v) => {
        if (!v) return true;
        return !/^\d+$/.test(v);
    })
    .test("common-password", "Essa senha é muito comum", (v) => {
        if (!v) return true;
        return !COMMON_PASSWORDS.has(v.toLowerCase());
    })
    .test("min-digit", "A senha precisa ter pelo menos 1 número", (v) => {
        if (!v) return true;
        return hasMinCount(/\d/g, 1)(v);
    })
    .test("min-alpha", "A senha precisa ter pelo menos 1 letra", (v) => {
        if (!v) return true;
        return hasMinCount(/[A-Za-z]/g, 1)(v);
    })
    .test("min-special", "A senha precisa ter pelo menos 1 caractere especial", (v) => {
        if (!v) return true;
        return hasMinCount(new RegExp(`[${SPECIALS_CLASS}]`, "g"), 1)(v);
    })
    .test("min-lower", "A senha precisa ter pelo menos 1 letra minúscula", (v) => {
        if (!v) return true;
        return hasMinCount(/[a-z]/g, 1)(v);
    })
    .test("min-upper", "A senha precisa ter pelo menos 1 letra maiúscula", (v) => {
        if (!v) return true;
        return hasMinCount(/[A-Z]/g, 1)(v);
    });

export const simplePasswordSchema = yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .test(
        "not-numeric-only",
        "A senha não pode conter apenas números.",
        (value) => !/^\d+$/.test(value || "")
    )

export const confirmPasswordFor = (field: string) =>
    yup
        .string()
        .required("A confirmação de senha é obrigatória.")
        .test("match", "As senhas devem ser iguais", function (value) {
            return value === this.parent[field]
        })