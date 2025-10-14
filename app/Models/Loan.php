<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    protected $guarded = ['id'];

    public function casts(): array
    {
        return [
            'loan_date' => 'date',
            'due_date' => 'date'
        ];
    }
}
