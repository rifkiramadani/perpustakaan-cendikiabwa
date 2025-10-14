<?php

namespace App\Models;

use App\Enums\ReturnBookCondition;
use Illuminate\Database\Eloquent\Model;

class ReturnBookCheck extends Model
{
    protected $guarded = ['id'];

    protected function casts(): array
    {
        return [
            'condition' => ReturnBookCondition::class,
        ];
    }
}
