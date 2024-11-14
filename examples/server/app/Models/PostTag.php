<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostTag extends Model
{
    //
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
