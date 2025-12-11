// BookSearchSection.tsx
import {useEffect, useRef, useState} from "react";
import {CreateBookForm} from "./CreateBookForm";

import type {BookResult, BookFormValues, FieldLocks} from "../../../api/types.ts";
import {searchBooksApi} from "../../../api/searchBooksAPI.ts";
import {SearchInputGradient} from "../../shared/inputs/SearchInputGradient.tsx";

const MIN_CHARS = 1;

export const BookSearchSection = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<BookResult[]>([]);
    const [status, setStatus] = useState<
        "idle" | "loading" | "error" | "empty" | "results"
    >("idle");
    const [selectedBook, setSelectedBook] = useState<BookResult | null>(null);

    const [formValues, setFormValues] = useState<BookFormValues>({
        title: "",
        author: "",
        totalPages: "",
        isbn: "",
        cover: "",
        googleId: "",
    });

    // trava visual dos campos (equivalente ao lockInput/unlockInput)
    const [locks, setLocks] = useState<FieldLocks>({
        title: true,
        author: true,
        totalPages: true,
    });

    const [searchLocked, setSearchLocked] = useState(false);

    const abortRef = useRef<AbortController | null>(null);
    const debounceRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (debounceRef.current) {
                window.clearTimeout(debounceRef.current);
            }
            if (abortRef.current) {
                abortRef.current.abort();
            }
        };
    }, []);


    function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setQuery(value);

        if (searchLocked) return;

        const q = value.trim();

        // limpa debounce anterior
        if (debounceRef.current) {
            window.clearTimeout(debounceRef.current);
        }

        if (!q || q.length < MIN_CHARS) {
            setResults([]);
            setStatus("idle");
            return;
        }

        // debounce da busca
        debounceRef.current = window.setTimeout(async () => {
            // aborta requisição anterior
            if (abortRef.current) {
                abortRef.current.abort();
            }

            const controller = new AbortController();
            abortRef.current = controller;

            setStatus("loading");

            try {
                const items = await searchBooksApi(q, controller.signal);
                if (!items.length) {
                    setResults([]);
                    setStatus("empty");
                } else {
                    setResults(items);
                    setStatus("results");
                }
            } catch (err: any) {
                if (err?.name === "AbortError") return;
                setStatus("error");
            }
        }, 300);
    }


    function handleSelectBook(book: BookResult) {
        setSelectedBook(book);
        setSearchLocked(true);

        const authorStr =
            book.authors && book.authors.length ? book.authors.join(", ") : "";
        const pageStr =
            typeof book.pageCount === "number" && book.pageCount > 0
                ? String(book.pageCount)
                : "";

        setFormValues({
            title: book.title ?? "",
            author: authorStr,
            totalPages: pageStr,
            isbn: book.isbn ?? "",
            cover: book.cover ?? "",
            googleId: book.id ?? "",
        });

        // trava campo que veio preenchido; libera o que vier vazio (mesma regra do legado)
        setLocks({
            title: !!book.title,
            author: !!authorStr,
            totalPages: !!pageStr,
        });

        setQuery(
            `${book.title || "Sem título"}${
                book.authors?.[0] ? ` — ${book.authors[0]}` : ""
            }`
        );

        setResults([]);
        setStatus("results");
    }

    function handleClearSelection() {
        setSelectedBook(null);
        setSearchLocked(false);
        setResults([]);
        setStatus("idle");
        // NOTE: não limpo formValues, igual ao script original
    }

    // handlers para edição manual dos campos destravados
    function updateField(field: keyof BookFormValues, value: string) {
        setFormValues((prev) => ({...prev, [field]: value}));
    }

    return (
        <div className="flex-1 relative">
            <label htmlFor="pesquisa-autor" className="sr-only">
                Buscar livro
            </label>

            <SearchInputGradient
                id="pesquisa-autor"
                value={query}
                onChange={handleQueryChange}
                readOnly={searchLocked}
            />

            <div
                className="w-full mt-3 mb-6 bg-white border border-slate-200 rounded-xl shadow-lg max-h-64 h-42 overflow-auto"
                role="listbox"
                aria-live="polite"
            >
                {/* Estado: livro selecionado */}
                {selectedBook && (
                    <div className="p-3 flex items-center gap-3">
                        <img
                            src={selectedBook.cover}
                            alt=""
                            className="w-10 h-14 object-cover rounded-md border border-slate-200"
                        />
                        <div className="min-w-0">
                            <div className="font-medium text-slate-800 truncate">
                                "{selectedBook.title || "Sem título"}"
                            </div>
                            <div className="text-sm text-slate-500 truncate">
                                {selectedBook.authors?.length
                                    ? selectedBook.authors.join(", ")
                                    : "Autor desconhecido"}
                            </div>
                            {typeof selectedBook.pageCount === "number" && (
                                <div className="text-xs text-slate-400">
                                    {selectedBook.pageCount} páginas
                                </div>
                            )}
                            <div className="text-xs text-accent mt-1">
                                Livro selecionado.
                            </div>
                        </div>
                        <div className="ml-auto">
                            <button
                                type="button"
                                onClick={handleClearSelection}
                                className="px-3 py-1 text-xs rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                            >
                                Trocar
                            </button>
                        </div>
                    </div>
                )}

                {/* Estado: nenhum livro selecionado → mostrar mensagens/resultados */}
                {!selectedBook && (
                    <>
                        {status === "idle" && (
                            <div className="p-3 text-sm text-slate-500">
                                Nenhum livro foi buscado ainda
                            </div>
                        )}

                        {status === "loading" && (
                            <div className="p-3 text-sm text-slate-500">Buscando…</div>
                        )}

                        {status === "error" && (
                            <div className="p-3 text-sm text-red-600">
                                Erro ao buscar livros
                            </div>
                        )}

                        {status === "empty" && (
                            <div className="p-3 text-sm text-slate-500">
                                Nenhum resultado encontrado
                            </div>
                        )}

                        {status === "results" && results.length > 0 && (
                            <div>
                                {results.map((book, index) => (
                                    <button
                                        key={book.id ?? index}
                                        type="button"
                                        onClick={() => handleSelectBook(book)}
                                        className="w-full text-left flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors cursor-pointer"
                                    >
                                        <img
                                            src={book.cover}
                                            alt=""
                                            className="w-10 h-14 object-cover rounded-md border border-slate-200"
                                        />
                                        <div className="min-w-0">
                                            <div className="font-medium text-slate-800 truncate">
                                                {book.title || "Sem título"}
                                            </div>
                                            <div className="text-sm text-slate-500 truncate">
                                                {book.authors?.length
                                                    ? book.authors.join(", ")
                                                    : "Autor desconhecido"}
                                            </div>
                                            {typeof book.pageCount === "number" && (
                                                <div className="text-xs text-slate-400">
                                                    {book.pageCount} páginas
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>

            <CreateBookForm
                values={formValues}
                locks={locks}
                onChangeField={updateField}
            />
        </div>
    );
};
