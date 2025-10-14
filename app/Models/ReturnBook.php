<?php

namespace App\Models;

use App\Models\Book;
use App\Models\Fine;
use App\Models\Loan;
use App\Enums\ReturnBookStatus;
use App\Models\ReturnBookCheck;
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

    public function loan()
    {
        return $this->belongsTo(Loan::class);
    }

    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    public function fine()
    {
        return $this->hasOne(Fine::class);
    }

    public function returnBookCheck()
    {
        return $this->hasOne(ReturnBookCheck::class);
    }
}
