<?php

namespace App\Models;

use App\Enums\BookStatus;
use App\Enums\BookLanguage;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $guarded = ['id'];


    public function casts(): array
    {
        return [
            'language' => BookLanguage::class,
            'status' => BookStatus::class
        ];
    }
}
