import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

// 1. Definisikan tipe untuk item di ComboBox
export type ComboBoxItem = {
    value: string; // Nilai unik untuk CommandItem onSelect
    label: string; // Teks yang ditampilkan di daftar dan tombol
};

export default function ComboBox({ items, selectedItem, onSelect, placeholder = 'Pilih item...' }: {
    // 2. 'items' seharusnya adalah array dari ComboBoxItem
    items: ComboBoxItem[];
    // 3. 'selectedItem' adalah string yang menyimpan nilai label dari item yang dipilih
    selectedItem: string;
    // 4. 'onSelect' adalah fungsi yang menerima string (nilai yang dipilih) dan tidak mengembalikan apa-apa (void)
    onSelect: (value: string) => void;
    placeholder: string;
}) {
    const [open, setOpen] = useState(false);

    // Perbaiki tipe untuk parameter 'value' di handleSelect
    const handleSelect = (value: string) => {
        onSelect(value);
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                    {/* Perbaikan: Gunakan item.label di sini */}
                    {items.find((item) => item.label === selectedItem)?.label ?? 'Pilih item'}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="max-h-[--radix-popover-content-available-height] w-[--radix-popover-trigger-width] p-0"
                align="start"
            >
                <Command>
                    <CommandInput placeholder={placeholder} className="h-9" />
                    <CommandList>
                        <CommandEmpty>Item tidak ditemukan</CommandEmpty>
                        <CommandGroup>
                            {items.map((item, index) => (
                                <CommandItem key={index} value={item.value} onSelect={(value) => handleSelect(value)}>
                                    {item.label}
                                    <CheckIcon
                                        className={cn(
                                            'ml-auto h-4 w-4',
                                            // Perbaikan: Bandingkan dengan item.label di sini
                                            selectedItem === item.label ? 'opacity-100' : 'opacity-0',
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
