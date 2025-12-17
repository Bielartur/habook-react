
export type User = {
    id: number
    name: string
    email: string
    meta_anual_paginas: number | null
    meta_mensal_paginas: number | null
    meta_diaria_paginas: number | null
    date_joined: string
    last_login: string
    livros: number[]
}

export type UserGoalsForm = {
    meta_diaria_paginas: string
    meta_mensal_paginas: string
    meta_anual_paginas: string
}

export type UserChangeForm = {
    old_password: string
    new_password: string
    confirm_password: string
}