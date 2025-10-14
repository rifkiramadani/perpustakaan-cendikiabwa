<?php

namespace App\Models;

use App\Enums\FinePaymentStatus;
use Illuminate\Database\Eloquent\Model;

class Fine extends Model
{
    protected $guarded = ['id'];

    protected function casts(): array
    {
        return [
            'payment_status' => FinePaymentStatus::class,
            'fine_date' => 'date',
        ];
    }
}
