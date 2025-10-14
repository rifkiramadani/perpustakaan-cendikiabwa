<?php

namespace App\Models;

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
}
