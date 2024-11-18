<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    use HasUuids; // para ver e; id en uuid en la respuesta de la petición
    //

    protected $fillable = [
        'name',
        'description',
    ]; // campos que se pueden llenar, los campos que se envian en la petición

    public function posts()
    {
        return $this->hasMany(Post::class, 'category_id');
    }
}
