const LOCAL_STORAGE_KEY = "AUTH_ACCESS";

// helpers de token
export const setAccessToken = (token: string) => localStorage.setItem(LOCAL_STORAGE_KEY, token);
export const getAccessToken = () => localStorage.getItem(LOCAL_STORAGE_KEY) ?? "";
export const clearAccessToken = () => localStorage.removeItem(LOCAL_STORAGE_KEY);