import type {BookResult} from "./types.ts";

export async function searchBooksApi(
    q: string,
    signal?: AbortSignal
): Promise<BookResult[]> {
    const url =
        "https://www.googleapis.com/books/v1/volumes" +
        `?q=${encodeURIComponent(q)}` +
        "&printType=books" +
        "&maxResults=8" +
        "&fields=items(id,volumeInfo/title,volumeInfo/authors,volumeInfo/pageCount,volumeInfo/imageLinks,volumeInfo/industryIdentifiers)";

    const res = await fetch(url, { signal });
    if (!res.ok) return [];

    const data = await res.json();

    return (data.items || []).map((it: any) => {
        const v = it.volumeInfo || {};
        const img = (v.imageLinks?.thumbnail || v.imageLinks?.smallThumbnail || "")
            .replace(/^http:/, "https:");

        const ids = v.industryIdentifiers || [];
        const isbn13 = ids.find((x: any) => x.type === "ISBN_13")?.identifier;
        const isbn10 = ids.find((x: any) => x.type === "ISBN_10")?.identifier;
        const isbn = isbn13 || isbn10 || null;

        const cover =
            img ||
            (isbn
                ? `https://covers.openlibrary.org/b/isbn/${encodeURIComponent(
                    isbn
                )}-M.jpg`
                : `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
                    v.title || q
                )}`);

        return {
            id: it.id,
            title: v.title || "",
            authors: v.authors || [],
            pageCount: v.pageCount,
            isbn,
            cover,
        } as BookResult;
    });
}