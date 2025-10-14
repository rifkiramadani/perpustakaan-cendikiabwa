<?php

namespace App\Models;

use App\Models\Loan;
use App\Models\Stock;
use App\Models\Category;
use App\Enums\BookStatus;
use App\Models\Publisher;
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

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function stock()
    {
        return $this->hasOne(Stock::class);
    }

    public function loans()
    {
        return $this->hasMany(Loan::class);
    }

    public function publisher()
    {
        return $this->belongsTo(Publisher::class);
    }
}
