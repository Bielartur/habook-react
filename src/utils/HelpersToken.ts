// const LOCAL_STORAGE_KEY = "AUTH_ACCESS";
let accessToken = "";

// helpers de token
export const setAccessToken = (token: string) => accessToken = token;
export const getAccessToken = () => accessToken ?? "";
export const clearAccessToken = () => accessToken = "";