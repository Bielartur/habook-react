export type BookResult = {
    id: string;
    title: string;
    authors: string[];
    pageCount?: number;
    isbn?: string | null;
    cover: string;
};

export type BookFormValues = {
    title: string;
    author: string;
    totalPages: string;
    isbn: string;
    cover: string;
    googleId: string;
};

export type FieldLocks = {
    title: boolean;
    author: boolean;
    totalPages: boolean;
};