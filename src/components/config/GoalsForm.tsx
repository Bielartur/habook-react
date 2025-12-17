import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {SelectRow} from "../shared/inputs/SelectRow.tsx";
import {useAuth} from "../../hooks/useAuth.tsx";
import {useRequests} from "../../hooks/useRequests.ts";
import type {User, UserGoalsForm} from "../../models/User.ts";

type Props = React.FormHTMLAttributes<HTMLFormElement> & {
    id?: string;
    onSubmittingChange?: (v: boolean) => void
}

export const GoalsForm = ({id, onSubmittingChange, ...props}: Props) => {
    const {userData, setUserData} = useAuth()
    const {saveGoals} = useRequests()

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<UserGoalsForm>({
        defaultValues: {meta_anual_paginas: "", meta_mensal_paginas: "", meta_diaria_paginas: ""},
    });

    useEffect(() => {
        onSubmittingChange?.(isSubmitting)
    }, [isSubmitting, onSubmittingChange])

    // Estado local das metas (controlado)
    const [goals, setGoals] = useState<UserGoalsForm>(() => ({
        meta_diaria_paginas: userData?.meta_diaria_paginas?.toString() ?? "",
        meta_mensal_paginas: userData?.meta_mensal_paginas?.toString() ?? "",
        meta_anual_paginas: userData?.meta_anual_paginas?.toString() ?? "",
    }))

    const onSubmit = async () => {
        const response = await saveGoals(goals);

        if (response.success) {
            setUserData(response.payload as User);
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
    }

    return (
        <form id={id} onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-2" {...props}>
            <SelectRow goals={goals} setGoals={setGoals}/>
        </form>
    )
}