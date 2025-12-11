// CreateBookForm.tsx
import { BasicInput } from "../../shared/inputs/BasicInput";
import {
    faBook,
    faHashtag,
    faLayerGroup,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { SelectOptions } from "../../shared/inputs/SelectOptions";
import type {BookFormValues, FieldLocks} from "../../../api/types.ts";


const options = [
    { value: 1, label: "Programação" },
    { value: 2, label: "Inspiracional" },
    { value: 3, label: "Fantasia" },
];

type Props = {
    values: BookFormValues;
    locks: FieldLocks;
    onChangeField: (field: keyof BookFormValues, value: string) => void;
};

export const CreateBookForm = ({ values, locks, onChangeField }: Props) => {
    return (
        <form className="space-y-4 mt-4" method="post">
            <div className="flex flex-col gap-4">
                <div className="w-full flex gap-4">
                    <div className="w-1/2">
                        <BasicInput
                            placeholder="Ex: O poder do hábito"
                            faIcon={faBook}
                            label="Título"
                            required={true}
                            readOnly={locks.title}
                            value={values.title}
                            onChange={(e) => onChangeField("title", e.target.value)}
                        />
                    </div>

                    <div className="w-1/2">
                        <BasicInput
                            placeholder="Ex: Charles Duhigg"
                            faIcon={faUser}
                            label="Autor"
                            required={true}
                            readOnly={locks.author}
                            value={values.author}
                            onChange={(e) => onChangeField("author", e.target.value)}
                        />
                    </div>
                </div>

                <div className="w-full flex gap-4">
                    <div className="w-1/2">
                        <BasicInput
                            placeholder="408"
                            faIcon={faHashtag}
                            label="Total de páginas"
                            required={true}
                            readOnly={locks.totalPages}
                            value={values.totalPages}
                            onChange={(e) => onChangeField("totalPages", e.target.value)}
                        />
                    </div>

                    <div className="w-1/2">
                        <SelectOptions
                            options={options}
                            faIcon={faLayerGroup}
                            label="Categoria"
                            required={true}
                        />
                    </div>
                </div>

                {/* campos “fantasma” se você quiser manter isbn/cover/googleId no form */}
                <input type="hidden" name="isbn" value={values.isbn} />
                <input type="hidden" name="cover" value={values.cover} />
                <input type="hidden" name="google_id" value={values.googleId} />
            </div>
        </form>
    );
};
