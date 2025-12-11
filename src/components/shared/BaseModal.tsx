import * as Dialog from "@radix-ui/react-dialog";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {motion, AnimatePresence} from "framer-motion";
import {ButtonSave} from "./buttons/ButtonSave.tsx";

type ModalBaseProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    icon: React.ReactNode;
    bgIconColor: string
    children: React.ReactNode;
    modalFooter?: React.ReactNode;
    trigger?: React.ReactNode;
};

export function ModalBase({
                              open,
                              setOpen,
                              onOpenChange,
                              title,
                              description,
                              icon,
                              bgIconColor,
                              children,
                              modalFooter,
                              trigger,
                          }: ModalBaseProps) {


    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            {trigger && (
                <Dialog.Trigger asChild>
                    {trigger}
                </Dialog.Trigger>
            )}

            <AnimatePresence onExitComplete={handleClose}>
                {open && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild>
                            <motion.div
                                className="fixed inset-0 bg-black/40 backdrop-blur-xs z-100"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.15}}
                            >

                            </motion.div>
                        </Dialog.Overlay>

                        <Dialog.Content asChild>
                            <motion.div
                                className="fixed top-1/2 left-1/2 md:w-md w-sm -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4 z-110"
                                initial={{opacity: 0, scale: 0.9, y: -10}}
                                animate={{opacity: 1, scale: 1, y: 0}}
                                exit={{opacity: 0, scale: 0.9, y: -10}}
                                transition={{duration: 0.22, ease: "easeOut"}}
                            >
                                <Dialog.Title
                                    className="flex items-center justify-between border-b border-slate-300 mb-4 pb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className={`p-1.5 py-2 ${bgIconColor} rounded-lg`}>
                                            {icon}
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-slate-700">
                                                {title}
                                            </h2>
                                            <Dialog.Description
                                                className="text-sm text-slate-500">{description}</Dialog.Description>
                                        </div>
                                    </div>
                                    <Dialog.Close
                                        className="py-2 px-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer close-modal-livro">
                                        <FontAwesomeIcon icon={faClose}/>

                                    </Dialog.Close>
                                </Dialog.Title>

                                <div className="mt-3">
                                    {children}
                                </div>

                                <div className="flex items-center justify-between border-t border-slate-300 mt-6 pt-2">
                                    {modalFooter ? modalFooter : <ButtonSave/>}
                                </div>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
}
