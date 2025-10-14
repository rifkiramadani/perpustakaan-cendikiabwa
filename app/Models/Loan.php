<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    protected $guarded = ['id'];

    public function casts(): array
    {
        //Casting agar date bisa di format
        return [
            'loan_date' => 'date',
            'due_date' => 'date'
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function book()
    {
        return $this->belongsTo(Book::class);
    }

    public function returnBook()
    {
        return $this->hasOne(ReturnBook::class);
    }
}
