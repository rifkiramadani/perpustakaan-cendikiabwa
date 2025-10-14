<?php

namespace App\Models;

use App\Enums\ReturnBookStatus;
use Illuminate\Database\Eloquent\Model;

class ReturnBook extends Model
{
    protected $guarded = ['id'];

    protected function casts(): array
    {
        return [
            'return_date' => 'date', //Casting agar date bisa di format
            'status' => ReturnBookStatus::class //Casting enum agar hanya value enum itu yang bisa di masukkan
        ];
    }
}
