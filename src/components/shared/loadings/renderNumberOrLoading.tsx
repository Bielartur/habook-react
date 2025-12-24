import { SmallLoading } from "./SmallLoading";

export const renderNumberOrLoading = (
    value: unknown,
    options?: { showLabel?: boolean }
): React.ReactNode => {
    if (typeof value === "number") {
        return value;
    }

    return <SmallLoading size={19.5} hasLabel={options?.showLabel ?? false} />;
};
