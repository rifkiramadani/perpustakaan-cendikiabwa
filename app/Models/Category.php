<?php

namespace App\Models;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    use HasFactory; //agar bisa menggunakan factory

    protected $guarded = ['id'];

    public function books()
    {
        return $this->hasMany(Book::class);
    }
}
