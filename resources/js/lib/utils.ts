import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const FINEPAYMENTSTATUS = {
    PENDING: 'TERTUNDA',
    SUCCESS: 'SUKSES',
    FAILED: 'GAGAL'
} as const; // Tambahkan 'as const' untuk tipe yang lebih ketat

// 1. Definisikan tipe untuk objek 'flash_message'.
// Asumsikan flash_message berisi string untuk 'message' dan 'type'.
// Sesuaikan ini jika struktur pesan Anda berbeda.
export type FlashMessage = {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info'; // Contoh tipe yang mungkin
};

// 2. Definisikan tipe untuk objek 'params' yang dilewatkan ke fungsi.
// Objek ini memiliki properti 'props', dan 'props' memiliki properti 'flash_message'.
interface FlashMessageProps {
    props: {
        flash_message?: FlashMessage; // Gunakan optional (?) jika pesan bisa kosong
    };
    // ... properti lain yang mungkin ada di root params ...
}

export default function flashMessage(params: FlashMessageProps): FlashMessage | undefined {
    // Return tipenya sekarang adalah FlashMessage atau undefined (jika opsional)
    return params.props.flash_message;
}
