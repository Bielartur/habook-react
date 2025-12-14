export type ApiError = {
    success: false;
    message: string;
    errors?: Record<string, string[]>
}

export type ApiErrorSchema = {
    detail: [
        {
            type: string,
            loc: string[],
            msg: string,
            ctx: {
                reason: string
            }
        }
    ]
}
