interface SheetDataProps {
    nama: string;
    harga: number;
    jumlahBayar: number;
    total: number;
    minggu1: boolean;
    minggu2: boolean;
    minggu3: boolean;
    minggu4: boolean;
    minggu5: boolean;
    minggu6: boolean;
    minggu7: boolean;
    minggu8: boolean;
    minggu9: boolean;
    minggu10: boolean;
    minggu11: boolean;
    minggu12: boolean;
}


interface ModalProps {
    show: boolean,
    onClose: () => void
}

export {SheetDataProps, ModalProps}

